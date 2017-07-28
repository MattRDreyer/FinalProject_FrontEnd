import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-recruiter-form',
  templateUrl: './recruiter-form.component.html',
  styleUrls: ['./recruiter-form.component.css'],
  animations: [fadeInAnimation]
})
export class RecruiterFormComponent implements OnInit {

  //this is needed for form on the page so we can do things like validation
  //we can discuss this in detail when needed
  recruiterForm: NgForm;
  @ViewChild('recruiterForm')
  currentForm: NgForm;

  //handle status messages
  //scenarios: failed to get/save/edit record
  successMessage: string;
  errorMessage: string;

  //what we actually got from the service when finding by email
  recruiter: object;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (params['username']) ? this.getRecordForEdit() : null;
      });
  }

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecruiterRecord("recruiter", params['username']))
      .subscribe(
        recruiter => this.recruiter = recruiter,
        error =>  this.errorMessage = <any>error);
  }

  editRecruiter(recruiter: NgForm){
    
      this.dataService.editRecruiterRecord("recruiter", recruiter.value, recruiter.value.recruiterId)
          .subscribe(
            recruiter => this.successMessage = "Record updated successfully",
            error =>  this.errorMessage = <any>error);
  }

  // everything below here is form validation boiler plate


  //everything below here is form validation boiler plate
  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.recruiterForm = this.currentForm;
    this.recruiterForm.valueChanges
      .subscribe(
        data => this.onValueChanged()
      );
  }

  onValueChanged() {
    let form = this.recruiterForm.form;

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
    'username': '',
    'email': '',
  };

  validationMessages = {
    'username': {
      'required': 'User Name is required.'
    },
    'email': {
      'required': 'Email is required',
      'pattern': 'Invalid Email Format'
    },
  };

}