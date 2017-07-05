import {Component} from "@angular/core";

@Component({
    selector: "events-list",
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            
            <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
            <h3>{{thumbnail.someProp}}</h3>
            <button class="btn btn-success" (click)="thumbnail.logMessage()">Click Me!</button>
        </div>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: "NgConf",
        date: "8/24/2020",
        time: "7:00 pm",
        price: "129.99",
        imageUrl: "/app/assets/images/angularconnect-shield.png",
        location: {
            address: "123 Main Street",
            city: "Dallas",
            country: "USA"
        }
    };


}