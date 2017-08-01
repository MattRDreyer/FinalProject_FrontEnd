import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
// import { MdDatepickerModule } from '@angular/material';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})

export class EventFormComponent implements OnInit {

  successMessage: string;
  errorMessage: string;

  event: object = {};
  events: any[];
  currentRecruiters: any[];

  eventForm: NgForm;
  @ViewChild('eventForm') currentForm: NgForm;

  getRecordForEdit(){
    console.log("I am here");
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("event/recruiters", +params['eventId']))
      .subscribe(event => this.event = event);
  }

    getRecruiters() {
      console.log("present");
    this.dataService.getRecords("recruiter")
      .subscribe(
        recruiters => {
          this.currentRecruiters = recruiters
          console.log(this.currentRecruiters)
        },
        error =>  this.errorMessage = <any>error);
  }
  getEventRecruiters(){
    this.dataService.getRecords("event/recruiters")
      .subscribe(
       events => this.events = events,
        error =>  this.errorMessage = <any>error);
  }

    constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router    
  ) {}


  ngOnInit() {

    this.getRecruiters();
    console.log("test");
    this.route.params
      .subscribe((params: Params) => {
        (+params['eventId']) ? this.getRecordForEdit() : null;
      });
  }
  

  saveEvent(eventId){
    if(typeof eventId === "number"){
      this.dataService.editRecord("event", this.eventForm.value, eventId)
            .subscribe(
            event => { 
              // this.router.navigate( ['/event'] ); 
              this.successMessage = "Record(s) updated succesfully"; 
              this.getEventRecruiters();
            },
            error =>  this.errorMessage = <any>error);

    }else{
      console.log(this.eventForm.value)
      this.dataService.addEventRecord("event", this.eventForm.value)
          .subscribe(
            event => { 
              // this.router.navigate( ['/event'] ); 
              this.successMessage = "Record(s) added succesfully"; 
              this.getEventRecruiters();
            },
            error =>  this.errorMessage = <any>error);
    }
    this.event = {};
    this.eventForm.reset();
  }

  byRecruiterId(item1, item2){
    if (item1 != undefined && item2 != undefined) {
      return item1.recruiterId === item2.recruiterId;
    } 
  }

   ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.eventForm = this.currentForm;
    this.eventForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.eventForm.form;

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

  formErrors = {
    'eventDate': '',
    'eventName': '',
  };

  validationMessages = {
    'eventDate': {
    'required': 'Event Date is required.',
    'pattern': 'Start date should be in the following format: YYYY-MM-DD'
  },
   'eventName': {
      'required': 'Event Name is required.',
      'minlength': 'Event Name must be at least 2 characters long.',
      'maxlength': 'Event Name cannot be more than 255 characters long.'
    }

  };


}