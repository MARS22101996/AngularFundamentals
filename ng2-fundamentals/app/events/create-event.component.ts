import { Component } from '@angular/core'
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
   em { float: right; color#E05C65; padding-left: 10px;}
  .error input { background-color: red;}
  `]
})

export class CreateEventComponent {
    isDirty: boolean = true
    event: any

    constructor(private router: Router, private eventService: EventService ) {

    }

    saveEvent(formValues) {
       this.eventService.saveEvent(formValues)
       this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }

    ngOnInit(){
        this.event = {id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        onlineUrl: 'http://ngSpectacular.com',
    }

    }
}