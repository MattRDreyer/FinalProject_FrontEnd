import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  animations: [fadeInAnimation]
})
export class EventComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  errorMessage: string;
  successMessage: string;
  events: any[];
  recruiters : any[];
  mode = 'Observable';
  event: object;

  constructor (
    private dataService: DataService, 
    public dialog: MdDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

   ngOnInit():
   void {
    this.dtOptions = {
      paging: true,
      searching: true,
      dom: 'Bfrtlip',
      buttons: [
        'copy',
        'print',
        'excel',
      ]
    }
    this.getEventRecruiters();
     
     localStorage.removeItem('currentEvent');
     

   
  }

  getEventRecruiters(){
    var recruiterInfo = localStorage.getItem('currentUser');
    this.dataService.getRecruiterIdRecords(`recruiter/events/${recruiterInfo}`)
      .subscribe(
       events => {
       this.events = events
       this.dtTrigger.next()
       },
       error =>  this.errorMessage = <any>error
       );
  }

  clickEvent(event){
    let eventNumber = event.eventId;
    console.log(eventNumber)
       this.dataService.eventLogin(`event/activate/${eventNumber}`)
        .subscribe(
        event => {
        localStorage.setItem("currentEvent", eventNumber)  //could also pass event to pass full object
        
      },
      error =>  this.errorMessage = <any>error);
  }


  deleteEvent(eventId:number) {
  // console.log(eventId);
    let dialogRef = this.dialog.open(DeleteConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.deleteRecord("event", eventId)
          .subscribe(
            event => { this.successMessage = "Record(s) deleted succesfully"; this.getEventRecruiters(); },
            error =>  this.errorMessage = <any>error);

      }

      }); 
}
}