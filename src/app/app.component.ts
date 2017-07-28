import { Component, Input } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { QuizComponent } from './quiz/quiz.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { RegisterComponent } from './register/register.component';
import { ProspectComponent } from './prospect/prospect.component';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() erroMessage: string;
}
