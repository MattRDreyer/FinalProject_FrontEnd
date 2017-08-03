import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css'],
  animations: [fadeInAnimation]
})

export class ProspectComponent implements OnInit {
  //this is needed for form on the page so we can do things like validation
  //we can discuss this in detail when needed
  prospectForm: NgForm;
  @ViewChild('prospectForm')
  
  currentForm: NgForm;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  //handle status messages
  //scenarios: failed to get/save/edit record
  successMessage: string;
  errorMessage: string;
  recruiterId: string;
  //what we actually got from the service when finding by email
  prospect: object;
  students: object;
  quizes: any[];
  student: object = {};
  notes: string;
  studentForm: NgForm;
  studentId: number;
  eventId: number;
  event: any = {};
  eventNumber: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void { 
    this.dtOptions = {
     paging: true,
     searching: true,
     dom: 'Bfrtlip',
     buttons: [
       'copy',
       'print',
       'excel'
     ]
    }   
   
    this.route.params
      .subscribe(
        (params: Params) => {
          if(+params['eventId']){
            this.getProspectsByEventId(params['eventId'])
          }
      });
   }
  updateNotes(student, eventNumber){
      console.log(this.students)
      this.dataService.editProspectNotes("student", student, student.studentId, eventNumber)
          .subscribe(
            student => { 
              this.successMessage = "Notes added successfully"
              
          },
            error =>  this.errorMessage = <any>error);
    }
  getProspectsByEventId(id: number){
  console.log(id)
    this.dataService.getRecruiterIdRecords(`event/students/${id}`)
      .subscribe(
        students =>{
          // localStorage.setItem('eventNumber', id);
          this.eventNumber = id;
          this.students = students.students
          this.dtTrigger.next()
        },
        error => console.log("students cannot be accessed")
      );
  }
}