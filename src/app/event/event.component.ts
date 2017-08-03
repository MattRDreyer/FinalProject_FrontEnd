import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'
import { fadeInAnimation } from '../animations/fade-in.animation';
import { DataTableDirective } from 'angular-datatables';

import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  animations: [fadeInAnimation]
})
export class EventComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
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

ngOnInit(): void {
   this.dtOptions = {
     paging: true,
     searching: true,
     dom: 'Bfrtlip',
     buttons: [
       'copy',
       'print',
       'excel'
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
        //  this.dtTrigger.next()
        this.rerender();  
       },
       error =>  this.errorMessage = <any>error
     );
 }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  clickEvent(event){
    let eventNumber = event.eventId;

    localStorage.setItem("currentEvent", eventNumber)  //could also pass event to pass full object
    
    console.log(localStorage.getItem('currentEvent') || null);
    
    // this.dataService.eventLogin(`event/activate/${eventNumber}`)
    //     .subscribe(
    //     event => {
    //     console.log("setting event: " + eventNumber);
    //     localStorage.setItem("currentEvent", eventNumber)  //could also pass event to pass full object
        
    //   },
    //   error =>  this.errorMessage = <any>error);
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

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}