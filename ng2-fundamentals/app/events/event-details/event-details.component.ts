import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { ISession } from "../index";

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
      .container { padding-left: 20px; padding-right: 20px; }
      .event-image { height: 100px; }
      a { cursor : pointer }
    `]
})

export class EventDetailsComponent {

    event: any
    addMode: boolean
    filterBy: string = 'all';
    sortBy: string = 'votes'

    constructor( private eventService: EventService,
    private route: ActivatedRoute ){

    }

    ngOnInit() {
        var id = this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(id-0);
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session: ISession)
    {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event);
        this.addMode = false
    }

    cancelAddSession(){
        this.addMode = false
    }
}