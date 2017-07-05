import {Component} from "@angular/core";

@Component({
    selector: "events-list",
    templateUrl: "app/events/events-list.component.html"
})
export class EventsListComponent {
    event = {
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