import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

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
  events: any[];
  errorMessage: string;
  successMessage: string;
  mode = 'Observable';
  event: object;

  constructor(private dataService: DataService, public dialog: MdDialog) { }

  ngOnInit(): void {
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

    populateProspects(event) {
    let eventId = event.eventId;
    this.dataService.returnProspects(`event/students/${eventId}`)
      .subscribe(
      event =>
      localStorage.setItem("currentEventId", eventId)  //currentEvent = potato... can be used later to retrieve get for other functions
        
      )}

  deleteEvent(eventId: number) {
    // console.log(eventId);
    let dialogRef = this.dialog.open(DeleteConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.deleteRecord("event", eventId)
          .subscribe(
          event => { this.successMessage = "Record(s) deleted succesfully"; this.getEventRecruiters(); },
          error => this.errorMessage = <any>error);

      }

      //This is useful if we have to pull all the events for all the recruiters
  // getEventRecruiters() {
  //   this.dataService.getRecords("event/recruiters")
  //     .subscribe(
  //     recruiterArray => {
  //       this.events = recruiterArray
  //       this.dtTrigger.next();
  //     },
  //     error => this.errorMessage = <any>error
  //     )
  // }

    });
  }
}