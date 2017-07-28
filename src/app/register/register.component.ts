import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeInAnimation]
})
export class RegisterComponent implements OnInit {
  //this is needed for form on the page so we can do things like validation
  //we can discuss this in detail when needed
  registerForm: NgForm;
  @ViewChild('registerForm')
  currentForm: NgForm;
  //handle status messages
  successMessage: string;
  errorMessage: string;

  username: string;
  password: string;

  register: object; 
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {}

saveRecruiter(recruiter: NgForm){
    console.log("recruiterId = " + recruiter.value.recruiterId)
    this.dataService.addRecruiterRecord("recruiter", recruiter.value)
        .subscribe(
          recruiter => this.successMessage = "Record added successfully.  Please login to begin your session.",
          error =>  this.errorMessage = <any>error);
            
    }
 
  //everything below here is form validation boiler plate
  ngAfterViewChecked() {
    this.formChanged();
  }
  formChanged() {
    this.registerForm = this.currentForm;
    this.registerForm.valueChanges
      .subscribe(
        data => this.onValueChanged()
      );
  }
  onValueChanged() {
    let form = this.registerForm.form;
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
    'password': '',
    'email': '',
    'firstName': '',
    'lastName': '',
  };
  validationMessages = {
    'username': {
      'required': 'User Name is required'
    },
    'password': {
      'required': 'Password is required'
    },
    'email': {
      'required': 'Email is required'
    },
    'firstName': {
      'required': 'First Name is required'
    },
    'lastName': {
      'required': 'Last Name is required'
    },
  };
}