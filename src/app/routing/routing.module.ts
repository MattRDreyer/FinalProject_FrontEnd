import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from '../home/home.component';
 
import { StudentComponent }   from '../student/student.component';
import { StudentFormComponent }   from '../student-form/student-form.component';

import { RecruiterComponent }   from '../recruiter/recruiter.component';
import { RecruiterFormComponent }   from '../recruiter-form/recruiter-form.component';
import { RegisterComponent }   from '../register/register.component';
import { ProspectComponent }   from '../prospect/prospect.component';
import { QuizComponent }   from '../quiz/quiz.component';

import { EventComponent }   from '../event/event.component';
import { EventFormComponent }   from '../event-form/event-form.component';

 
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

  { path: 'event',  component: EventComponent },
  // { path: 'recruiter/username/:enterprise_id', component: EventComponent },
  { path: 'event/add', component: EventFormComponent },
  { path: 'event/edit/:eventId', component: EventFormComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}