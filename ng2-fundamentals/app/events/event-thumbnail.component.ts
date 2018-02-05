import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div [hidden]="!event?.location" >
            <span>Location: {{event?.location?.address}} </span>
            <span> {{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click me! </button>
    </div>`,
    styles: [
        `.green { color: #003300 !important; }
        .bold {font-weight: bold; }
        .well div { color: #bbb; }`
    ]
})

export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter()
    someProperty:any = "some value"

    handleClickMe() {       
       this.eventClick.emit(this.event.name)
    }

    logFoo()
    {
        console.log('foo');
    }

    getStartTimeClass() {
     if(this.event && this.event.time === '8:00 am')
        return ['green', 'bold']
     return []
    }
}