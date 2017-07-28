import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { DataService } from '../data.service'
import { ConfirmComponent } from '../confirm/confirm.component'

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {
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

  
  getEventRecruiters() {
    this.dataService.getRecords("event/recruiters")
      .subscribe(
      recruiterArray => {
        this.events = recruiterArray
        this.dtTrigger.next();
      },
      error => this.errorMessage = <any>error
      )
  }


    populateProspects(event) {
    let eventId = event.eventId;
    this.dataService.returnProspects(`event/students/${eventId}`)
      .subscribe(
      event =>
      localStorage.setItem("currentEventId", eventId)  //currentEvent = potato... can be used later to retrieve get for other functions
        
      )}

        clickEvent(event){
    let eventNumber = event.eventId;
    console.log(eventNumber)
       this.dataService.eventLogin(`event/activate/${eventNumber}`)
          .subscribe(
              event => this.event = event,
              error =>  this.errorMessage = <any>error);
             
  }

  deleteEvent(eventId: number) {
    // console.log(eventId);
    let dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.deleteRecord("event", eventId)
          .subscribe(
          event => { this.successMessage = "Record(s) deleted succesfully"; this.getEventRecruiters(); },
          error => this.errorMessage = <any>error);

      }



    });
  }
}