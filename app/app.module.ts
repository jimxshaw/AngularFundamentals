import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavbarComponent} from "./nav/navbar.component";
import {EventService} from "./events/shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from "./events/event-detail/event-details.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {CreateEventComponent} from "./events/create-event.component";
import {Status404Component} from "./errors/status-404.component";
import {EventRouteActivatorService} from "./events/event-route-activator.service";

@NgModule({
    imports: [
        BrowserModule,
        // Define our routes and register them within the imported RouterModule.
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        NavbarComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Status404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivatorService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}