import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DataService } from '../data.service'
import { ConfirmComponent } from '../confirm/confirm.component'
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
 
  constructor (private dataService: DataService, public dialog: MdDialog) {}

   ngOnInit() { this.getEventRecruiters(); }

  getEventRecruiters(){
    this.dataService.getRecords("event/recruiters")
      .subscribe(
       events => this.events = events,
        error =>  this.errorMessage = <any>error);
  }

  deleteEvent(eventId:number) {
  // console.log(eventId);
    let dialogRef = this.dialog.open(ConfirmComponent);
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
