import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DomSanitizer } from '@angular/platform-browser';

import { MdDialog, MdDialogConfig } from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';
import _ from 'lodash';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  animations: [fadeInAnimation]
})
export class QuizComponent implements OnInit {

  //this is needed for form on the page so we can do things like validation
  quizForm: NgForm;
  @ViewChild('quizForm')
  currentForm: NgForm;

  errorMessage: string;
  successMessage: string;

  entries = [];
  selectedEntry: any;
  choice: string;

  questions: any;
  quiz: object = {};
  //quizForm: NgForm;
  role: string;

  mode = 'Observable';
  student: any;
  email: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private sanitizer: DomSanitizer, 
    public dialog: MdDialog
  ) {}
  
  ngOnInit() { 
    this.email = localStorage.getItem('email') || null;
    console.log("In ngOnInit - email is " + this.email);
    this.getStudent();
  }

  getStudent() {
    // this.route.params
    //   .switchMap((params: Params) => this.dataService.getStudentRecordByEmail("student", this.email))
    this.dataService.getStudentRecordByEmail("student", this.email)
      .subscribe(
          student => { 
            this.student = student
            this.getQuiz()
          },
          error => this.errorMessage = <any>error
      )
  }

  getQuiz() {
    console.log("in getQuiz - studentId is " + this.student.studentId);
    console.log("in getQuiz - email is " + this.email);
    // If they are not applying for a Frontend, Backend, or Both then no quiz is needed
    if (this.student.role == "Neither") {
      console.log("Role is Neither - No Quiz Needed");
      this.thankAndExit();
    }
    this.dataService.getQuizRecords( "quiz", "student", this.email, this.student.role.toLowerCase() )
      .subscribe(
        quiz => {
          this.quiz = quiz;
          this.questions = quiz.questions;
          // this will filter out null records in the returned dataset to check for an error
          // for(let i =0; i < this.questions.length; i++){
          //   if(_.isEmpty(this.questions[i])){
          //     this.questions.splice(i, 1)
          //   }
          // }
          // console.log(this.questions)
        },
        error => this.errorMessage = <any>error
      )
  }

  confirmParticipation() {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      position: {
      top: '',
      bottom: '100px',
      left: '250px',
      right: ''
      },
      height: '190px',
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => { });
  }
  
  escapeHtml(unsafe) {
    // try {
    //   var html = unsafe.replace(/\{/g, "{")
    //                    .replace(/\}/g, "}")
    //                   //  .replace(/\\/g, "\\")
    //                    .replace(/;/g, ";")
    // } catch (error) {
    //   html = unsafe;
    // }
    return unsafe;
  }

  saveQuiz(quizForm: NgForm) {
    console.log("email: " + this.email);
    console.log("studentId: " + this.student.studentId);
    console.log("quizId " + quizForm.value.quizId);

    let quiz = {
      answers: []
    }
    this.entries.forEach(entry => {
        quiz.answers.push({
            questionId: entry.questionId,
            providedAnswer: entry.select
        })
    });
    
    //console.log(JSON.stringify(quiz));
    var str = JSON.stringify(quiz);
    var obj = JSON.parse(str);
    this.dataService.addQuizRecord("quizResults", obj, quizForm.value.quizId, this.student.studentId)
      .subscribe(
        res => this.successMessage = "Record added successfully",
        error =>  this.errorMessage = <any>error
    );  

    this.thankAndExit();
  } // end saveQuiz

  thankAndExit() {
    this.confirmParticipation();
    localStorage.removeItem('email');
    this.router.navigate( ['/student'] );
  }

  // This is executed by an event on the web page. 
  onSelectionChange(entry, choice) {
    this.selectedEntry = entry;
    this.selectedEntry["select"] = choice;
    //console.log(this.selectedEntry);
    // for (let i = 0; i < this.entries.length; i++) {
    this.entries.forEach(entree => {
      if (this.selectedEntry.questionId == entree.questionId) {
          entree = this.selectedEntry;
          //console.log("question " + this.selectedEntry.questionId + " already exists in array - overlaying");
          return;
      }
    });
    //console.log("question " + this.selectedEntry.questionId + " does not exist in array - pushing");
    this.entries.push(this.selectedEntry);
  } // end onSelectionChange


  //everything below here is form validation boiler plate
  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.quizForm = this.currentForm;
    this.quizForm.valueChanges
      .subscribe(
        data => this.onValueChanged()
      );
  }

  onValueChanged() {
    let form = this.quizForm.form;

    for (let field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  //fields that need to be validated
  formErrors = {
    'choiceA': '',
    'choiceB': '',
    'choiceC': '',
    'choiceD': '',
    'choiceE': ''
  };

  validationMessages = {
    'choiceA': {
      'required': 'Answer is required'
    },
    'choiceB': {
      'required': 'Answer is required'
    },
    'choiceC': {
      'required': 'Answer is required'
    },
    'choiceD': {
      'required': 'Answer is required'
    },
    'choiceE': {
      'required': 'Answer is required'
    },
  };

}  // end QuizComponent