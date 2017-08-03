import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {NavbarComponent} from "./nav/navbar.component";
import {ToastrService} from "./common/toastr.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Status404Component} from "./errors/status-404.component";
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventsListResolverService,
    SessionListComponent,
    CreateSessionComponent
} from "./events/index";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapsibleWellComponent} from "./common/collapsible-well.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
        Status404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivatorService,
        EventsListResolverService,
        {
            provide: "canDeactivateCreateEvent",
            useValue: checkDirtyState
        },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(createEventComponent: CreateEventComponent): boolean {
    if (createEventComponent.isDirty) {
        return window.confirm("Event not saved. Do you really want to cancel?");
    }

    return true;
}