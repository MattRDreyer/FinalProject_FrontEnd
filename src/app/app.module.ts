import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
 
 
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { MdDatepickerModule, MdInputModule,
 MdNativeDateModule, MdTabsModule,
 MdIconModule, MdMenuModule, MdListModule } from '@angular/material';
 
import { DataService } from './data.service';

import { ConfirmComponent } from './confirm/confirm.component';

import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';

import { QuizComponent } from './quiz/quiz.component';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event-form/event-form.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { RecruiterFormComponent } from './recruiter-form/recruiter-form.component';
import { RegisterComponent } from './register/register.component';
import { ProspectComponent } from './prospect/prospect.component';
import { StatusMessageComponent } from './status-message/status-message.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';

import { DataTablesModule } from 'angular-datatables';
import { AlleventsComponent } from './allevents/allevents.component';

import { DeactivateComponent } from './deactivate/deactivate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ConfirmComponent,
    StudentComponent,
    StudentFormComponent,
    QuizComponent,
    EventComponent,
    EventFormComponent,
    RecruiterComponent,
    RecruiterFormComponent,
    RegisterComponent,
    ProspectComponent,
    StatusMessageComponent,
    DeleteConfirmComponent,
    AlleventsComponent,
    DeactivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTablesModule,
    AngularMultiSelectModule,
    MdDatepickerModule,
    MdInputModule,
    MdIconModule,
    MdNativeDateModule,
    MdTabsModule,
    MdMenuModule, 
    MdListModule 
    
  ],
  entryComponents: [ConfirmComponent, DeleteConfirmComponent, DeactivateComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
