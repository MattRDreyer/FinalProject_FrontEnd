import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { StudentComponent }   from '../student/student.component';
import { StudentFormComponent }   from '../student-form/student-form.component';

import { QuizComponent }   from '../quiz/quiz.component';


import { RecruiterComponent }   from '../recruiter/recruiter.component';
import { RecruiterFormComponent }   from '../recruiter-form/recruiter-form.component';
import { RegisterComponent }   from '../register/register.component';

import { ProspectComponent }   from '../prospect/prospect.component';

import { EventComponent }   from '../event/event.component';
import { EventFormComponent }   from '../event-form/event-form.component';

import { HomeComponent }   from '../home/home.component';

import { AlleventsComponent } from '../allevents/allevents.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },

  { path: 'student',  component: StudentComponent },  
  { path: 'student/edit/:email', component: StudentFormComponent },
  { path: 'student/add', component: StudentFormComponent },

  { path: 'quiz',  component: QuizComponent },
  { path: 'quiz/:email',  component: QuizComponent },
  { path: 'quiz/:studentId',  component: QuizComponent },

  { path: 'recruiter',  component: RecruiterComponent },
  { path: 'recruiter/add', component: RecruiterFormComponent },
  { path: 'register/add',  component: RegisterComponent },
  { path: 'prospectlist',  component: ProspectComponent },
  { path: 'event/students/:eventId',  component: ProspectComponent },

  { path: 'allevents', component: AlleventsComponent },

  { path: 'event',  component: EventComponent },
  { path: 'recruiter/events/:recruiterId',  component: EventComponent },
  { path: 'event/add', component: EventFormComponent },
  { path: 'event/edit/:eventId', component: EventFormComponent },
  { path: 'event/activate/:eventId',  component: StudentComponent }, 



];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
