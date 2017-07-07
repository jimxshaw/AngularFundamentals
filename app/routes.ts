import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-detail/event-details.component";
import {CreateEventComponent} from "./events/create-event.component";
import {Status404Component} from "./errors/status-404.component";
import {Routes} from "@angular/router";
import {EventRouteActivatorService} from "./events/event-route-activator.service"; // TS type definition for extra intellisense and compile time safety in our IDE.

// Whenever the URL hits /events/ then show the EventsListComponent
// wherever the <router-outlet> component is placed. That currently
// is placed in the bootstrapped EventsAppComponent template.
// The ordering of routes is important. The events/new route is above
// the events/:id route because we don't want events/new to be processed
// as if it were events/:id.
// The canActivate/canDeactivate properties take in an array of route guard services or functions that
// specify rules of if/when a particular route can be accessed or prevent navigating away from a route.
export const appRoutes: Routes = [
    {path: "events/new", component: CreateEventComponent, canDeactivate: ["canDeactivateCreateEvent"]}, // This uses a function rather a service but still needs to be registered in AppModule's providers.
    {path: "events", component: EventsListComponent},
    {path: "events/:id", component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: "404", component: Status404Component},
    {path: "", redirectTo: "/events", pathMatch: "full"}, // Default route.
];