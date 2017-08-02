import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';
// import { CustomFormsModule } from 'ng2-validation'; 
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
  firstName: string;
  password: string;
  register: object; 
  lc_email: string;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit() {
    localStorage.removeItem('currentUser');
  }
saveRecruiter(recruiter: NgForm){
    this.lc_email = recruiter.value.email;
    this.lc_email = this.lc_email.toLowerCase();
    recruiter.value.email = this.lc_email;
    console.log("recruiterId = " + recruiter.value.recruiterId)
    this.dataService.addRecruiterRecord("recruiter", recruiter.value)
        .subscribe(
          recruiter => {
          this.successMessage = "Registration successful.  Please login on the next page"
          return new Promise((resolve) => 
          setTimeout(() => resolve(this.router.navigate([ 'recruiter'])), 3000))
          
          },
          error => alert("Username or email already in use.  Please try again"))
          
            
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
      'required': 'User Name is required',
      'minLength': 'User Name must be at least 2 characters',
      'maxLength': 'User Name cannot be more than 20 characters'
    },
    'password': {
      'required': 'Password is required',
      'minLength': 'Password must be at least 2 characters',
      'maxLength': 'Password cannot be more than 20 characters'
    },
    'email': {
      'required': 'Email is required',
      'pattern': 'Valid email must be entered',
      'maxLength': 'Email cannot be more than 50 characters'
    },
    'firstName': {
      'required': 'First Name is required',
      'minLength': 'First Name must be at least 2 characters',
      'maxLength': 'First Name cannot be more than 20 characters'
    },
    'lastName': {
      'required': 'Last Name is required',
      'minLength': 'Last Name must be at least 2 characters',
      'maxLength': 'Last Name cannot be more than 20 characters'
    },
  };
}