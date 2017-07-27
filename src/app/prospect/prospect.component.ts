import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';

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

  //handle status messages
  //scenarios: failed to get/save/edit record
  successMessage: string;
  errorMessage: string;

  //what we actually got from the service when finding by email
  prospect: object;
  students: object;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() { 
    this.route.params
      .subscribe(
        (params: Params) => {
          if(+params['eventId']){
            this.getProspectsByEventId(+params['eventId'])
          }
      });
   }

  // getStudents() {
  //   this.dataService.getProspectRecord("student")
  //     .subscribe(
  //       student => this.students = student,
  //       error =>  this.errorMessage = <any>error);
  // }

  getProspectsByEventId(id: number){

    this.dataService.getRecruiterIdRecords(`event/students/${id}`)
      .subscribe(
        students =>{
          this.students = students.students
        },
        error => console.log("shit didnt go right")
      );
  }
}