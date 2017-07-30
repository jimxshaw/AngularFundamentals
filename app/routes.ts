import {Status404Component} from "./errors/status-404.component";
import {Routes} from "@angular/router";
import {
    CreateEventComponent,
    EventsListComponent,
    EventRouteActivatorService,
    EventsListResolverService, // TS type definition for extra intellisense and compile time safety in our IDE.
    EventDetailsComponent,
    CreateSessionComponent
} from "./events/index";

// Whenever the URL hits /events/ then show the EventsListComponent
// wherever the <router-outlet> component is placed. That currently
// is placed in the bootstrapped EventsAppComponent template.
// The ordering of routes is important. The events/new route is above
// the events/:id route because we don't want events/new to be processed
// as if it were events/:id.
// The canActivate/canDeactivate properties take in an array of route guard services or functions that
// specify rules of if/when a particular route can be accessed or prevent navigating away from a route.
export const appRoutes: Routes = [
    // This uses a function rather a service but still needs to be registered in AppModule's providers.
    {path: "events/new", component: CreateEventComponent, canDeactivate: ["canDeactivateCreateEvent"]},
    // Before resolving this route, call the resolver service. When the resolver finishes and returns
    // some data, add that data to the route as a property named events.
    {path: "events", component: EventsListComponent, resolve: {events: EventsListResolverService}},
    {path: "events/:id", component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: "events/session/new", component: CreateSessionComponent},
    {path: "404", component: Status404Component},
    // Default route.
    {path: "", redirectTo: "/events", pathMatch: "full"},
    // Any routes that has user is designated to be part of the UserModule, which is a child
    // module to the main AppModule. The path to the child module is needed + # + child module name.
    {path: "user", loadChildren: "app/user/user.module#UserModule"}
];