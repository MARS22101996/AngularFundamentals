import { Component, OnInit } from '@angular/core'
import { EventService } from "./shared/event.service"
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from "./index";

@Component({
    selector: 'events-list',
    template: `<div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
    <event-thumbnail (click) ="handleThumbnailClick(event.name)" (eventClick)="handleEventClicked($event)" [event]="event"></event-thumbnail>  
    </div>
    </div>
</div>`
})

export class EventsListComponent implements OnInit{
    events:IEvent[]
    
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute ){
        
    }

    handleEventClicked(data) {
        console.log('received:', data)
    }

    handleThumbnailClick(eventName){
       this.toastr.success(eventName);
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }
}
