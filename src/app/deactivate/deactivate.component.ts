import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css'],
  animations: [fadeInAnimation]
})
export class DeactivateComponent implements OnInit {

  //this is needed for form on the page so we can do things like validation
  //we can discuss this in detail when needed
  recruiterForm: NgForm;
  @ViewChild('recruiterForm')
  currentForm: NgForm;

  //handle status messages
  successMessage: string;
  errorMessage: string;

  username: string;
  password: string;

  recruiter: object; 

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public dialog: MdDialog
  ) {}

  ngOnInit() {}

  authenticate(recruiter: NgForm) {
    
    let username = recruiter.value.username;
    let password = recruiter.value.password;

    this.dataService.recruiterLogin(`recruiter/${username}/${password}`)
      .subscribe(
        recruiter => {
          localStorage.setItem("currentUser", JSON.stringify(recruiter))  //currentUser = potato... can be used later to retrieve get for other functions
          console.log("currentUser: " + JSON.stringify(recruiter))
          this.router.navigate([ 'recruiter/events', recruiter])
          this.dialog.closeAll()
      },
      error => this.errorMessage = "Login Invalid.  Please try again");
  }

  closeDialog() {
    this.dialog.closeAll();
  }

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
    'password': '',
  };

  validationMessages = {
    'username': {
      'required': 'User Name is required'
    },
    'password': {
      'required': 'Password is required'
    }
  };

} // end DeactivateComponent