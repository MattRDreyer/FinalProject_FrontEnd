import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { StatusMessageComponent } from './status-message/status-message.component';
import {CommonModule} from '@angular/common';


import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { RecruiterFormComponent } from './recruiter-form/recruiter-form.component';
import { RegisterComponent } from './register/register.component';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ProspectComponent } from './prospect/prospect.component';
import { QuizComponent } from './quiz/quiz.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    StatusMessageComponent,
    StudentComponent,
    StudentFormComponent,
    DeleteConfirmComponent,
    RecruiterComponent,
    RecruiterFormComponent,
    RegisterComponent,
    EventComponent,
    EventFormComponent,
    ProspectComponent,
    QuizComponent
    // EventRecruiterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  entryComponents: [DeleteConfirmComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }