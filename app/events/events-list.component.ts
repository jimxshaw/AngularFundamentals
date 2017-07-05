import {Component} from "@angular/core";

@Component({
    selector: "events-list",
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="well hoverwell thumbnail">
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div>Time: {{event.time}}</div>
                <div>Price: \${{event.price}}</div>
                <div>
                    <span>Location: {{event.location.address}}</span>
                    <span>&nbsp;</span>
                    <span>{{event.location.city}}, {{event.location.country}}</span>
                </div>
            </div>
        </div>
    `
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