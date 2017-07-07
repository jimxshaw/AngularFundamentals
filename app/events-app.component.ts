import {Component} from "@angular/core";

@Component({
    selector: "events-app",
    // By placing the router outlet component here we specify our
    // defined routes, within routes.ts, should begin here. Generally,
    // router outlet is placed in the template of the highest level app component.
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {

}