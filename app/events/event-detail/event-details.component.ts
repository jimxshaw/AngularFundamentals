import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";

@Component({
    // No selector is needed for this component because we reach
    // it directly through routing. e.g. /events/{id}
    templateUrl: "/app/events/event-detail/event-details.component.html",
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {

    event: any;

    constructor(private eventService: EventService) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(2);
    }

}