import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";

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

    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        // The id is pulled directly from the url parameters. E.g. /events/7 would lead to
        // retrieving the 7th event and displaying that. We have to cast the
        // id string to a number.
        this.event = this.eventService.getEvent(Number(this.activatedRoute.snapshot.params["id"]));
    }

}