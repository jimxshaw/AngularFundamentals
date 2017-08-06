import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {NavbarComponent} from "./nav/navbar.component";
import {TOASTR_TOKEN, Toastr} from "./common/toastr.service";
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
    CreateSessionComponent,
    DurationPipe
} from "./events/index";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapsibleWellComponent} from "./common/collapsible-well.component";

// Declare the toastr variable so that we contain this global
// object within the scope of this module.
declare let toastr: Toastr;

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
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
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