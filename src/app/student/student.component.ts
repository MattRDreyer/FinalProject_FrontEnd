
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';

import { MdDialog, MdDialogConfig } from '@angular/material';
import { DeactivateComponent } from '../deactivate/deactivate.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  animations: [fadeInAnimation]
})
export class StudentComponent implements OnInit {

  //this is needed for form on the page so we can do things like validation
  //we can discuss this in detail when needed
  studentForm: NgForm;
  @ViewChild('studentForm')
  currentForm: NgForm;

  //handle status messages
  successMessage: string;
  errorMessage: string;

  email: string;
  student: object; 

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public dialog: MdDialog
  ) {}

  ngOnInit() {}

  deactivateAndExit() {
    this.deactivateRecruiter();
  }

  deactivateRecruiter() {
    let dialogRef = this.dialog.open(DeactivateComponent);
  }
  

  //everything below here is form validation boiler plate
  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.studentForm = this.currentForm;
    this.studentForm.valueChanges
      .subscribe(
        data => this.onValueChanged()
      );
  }

  onValueChanged() {
    let form = this.studentForm.form;

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
    'email': '',
  };

  validationMessages = {
    'email': {
      'required': 'Email is required',
      'pattern': 'Invalid Email Format'
    },
  };
}
