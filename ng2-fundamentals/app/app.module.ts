import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from  './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './navbar/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from "./common/toastr.service"
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { RouterModule } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";


@NgModule({
   imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
   declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, EventDetailsComponent, CreateEventComponent],
   bootstrap: [EventsAppComponent],
   providers: [EventService, ToastrService]
})

export class AppModule { }