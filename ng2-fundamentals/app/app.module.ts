import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './navbar/navbar.component'
import { ToastrService } from "./common/toastr.service"
import { appRoutes } from './routes'
import { RouterModule } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    EventThumbnailComponent,
    CreateSessionComponent,
    EventService,
    SessionListComponent
} from './events/index'
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { DurationPipe } from "./events/shared/duration.pipe";

@NgModule({
   imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
   declarations: [
       EventsAppComponent,
       EventsListComponent,
       EventThumbnailComponent,
       NavBarComponent,
       EventDetailsComponent,
       CreateEventComponent,
       Error404Component,
       CreateSessionComponent,
       SessionListComponent,
       CollapsibleWellComponent,
       DurationPipe
   ],
   bootstrap: [EventsAppComponent],
   providers: [
       EventService,
       ToastrService,
       EventRouteActivator,
       {
           provide: 'canDeactivateCreateEvent',
           useValue: checkDirtyState
       },
      EventListResolver,
      AuthService
   ]
})

export class AppModule { }

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this element, do you really want to cancel?')
    return true;
}