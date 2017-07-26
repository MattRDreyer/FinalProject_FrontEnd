import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  animations: [fadeInAnimation]
})
export class QuizComponent implements OnInit {

  errorMessage: string;
  successMessage: string;

  entries = [];
  selectedEntry: any;
  choice: string;

  questions: object = {};
  quiz: object = {};
  quizForm: NgForm;

  mode = 'Observable';
  student: any;
  email: string;

  res: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}
  
  escapeHtml(unsafe) {
    // return this.sanitizer.bypassSecurityTrustHtml(unsafe)
    return unsafe.replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&#039;")
                 .replace(/{/g, "&#123;")
                 .replace(/}/g, "&#125;")
  }

  ngOnInit() { 
    this.email = localStorage.getItem('email') || null;
    this.getQuiz();
    this.getStudent();
  }


  // http://localhost:8080//quiz/student/{email}
  getQuiz() {
    console.log("in getQuiz - email is " + this.email);
    this.dataService.getQuizRecords( "quiz", "student", this.email )
      .subscribe(
        quiz => {
          this.quiz = quiz;
          this.questions = quiz.questions;
        },
        error => this.errorMessage = <any>error);
  }


  getStudent() {
    this.route.params
      .switchMap((params: Params) => this.dataService.getStudentRecordByEmail("student", this.email))
      .subscribe(
        student => this.student = student,
        error =>  this.errorMessage = <any>error);
  }  

  // POST http://localhost:8080/quizResults/add/{quizId}/{studentId}
  // console.log(this.entries);
  // console.log("---------------- in saveQuiz() ---------------------")
  // console.log("for quizId " + quizForm.value.quizId);
  // console.log("for studentId " + this.student.studentId);
  saveQuiz(quizForm: NgForm) {

    let quiz = {
      quizId: quizForm.value.quizId,
      entries: []
    }
    this.entries.forEach(entry => {
        quiz.entries.push({
            questionId: entry.questionId,
            answer: entry[`${entry.select}`]
        })
    })
    
    this.dataService.addQuizRecord("quizResults", JSON.stringify(quiz), quizForm.value.quizId, this.student.studentId)
      .subscribe(
        res => this.successMessage = "Record added successfully",
        error =>  this.errorMessage = <any>error);
    
    localStorage.removeItem('email') || null;
    this.router.navigate( ['/student'] );
  }


    onSelectionChange(entry, choice) {
      this.selectedEntry = entry;
      this.selectedEntry["select"] = choice;

      for (let i = 0; i < this.entries.length; i++) {
        if (this.selectedEntry.questionId == this.entries[i].questionId) {
            this.entries[i] = this.selectedEntry;
            //console.log("question " + this.selectedEntry.questionId + " already exists in array - overlaying");
            return;
        }
      }
      //console.log("question " + this.selectedEntry.questionId + " does not exist in array - pushing");
      this.entries.push(this.selectedEntry);
    }

}