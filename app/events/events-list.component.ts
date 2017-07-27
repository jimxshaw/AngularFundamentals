import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "./shared/index";

@Component({
    // This selector is no longer needed as we already routing
    // to it directly through the provided routes.
    // selector: "events-list",
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let singleEvent of events" class="col-md-5">
                    <event-thumbnail (click)="handleThumbnailClick(singleEvent.name)"
                                     [event]="singleEvent"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService, private toastrService: ToastrService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        // The data param, in this case "events", must match the route property name in routes.ts
        this.events = this.activatedRoute.snapshot.data["events"];
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName, "Upcoming Events");
    }
}