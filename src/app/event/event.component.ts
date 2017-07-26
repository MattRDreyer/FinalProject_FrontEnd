import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

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

  errorMessage: string;
  successMessage: string;
  events: any[];
  recruiters : any[];
  mode = 'Observable';
  event: object;

  constructor (private dataService: DataService, public dialog: MdDialog) {}

   ngOnInit() { this.getEventRecruiters(); 
   console.log()
  }

  getEventRecruiters(){
    var recruiterInfo = localStorage.getItem('currentUser');
    //console.log('recruiterId: ' + recruiterId);
    this.dataService.getRecruiterIdRecords(`recruiter/events/${recruiterInfo}`)
      .subscribe(
       events => this.events = events,
       error =>  this.errorMessage = <any>error);
  }

  populateProspects(event) {
    
    let eventId = event.eventId;
    this.dataService.returnProspects(`event/students/${eventId}`)
      .subscribe(
      event =>
      localStorage.setItem("currentEventId", eventId)  //currentEvent = potato... can be used later to retrieve get for other functions
        
      )}


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