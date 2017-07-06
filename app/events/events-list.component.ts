import {Component} from "@angular/core";
import {EventService} from "./shared/event.service";

@Component({
    selector: "events-list",
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let singleEvent of events" class="col-md-5">
                    <event-thumbnail [event]="singleEvent"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent {
    events: any[];

    constructor(private eventService: EventService) {
        this.events = eventService.getEvents();
    }
}