import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {ActivatedRoute, Params} from "@angular/router";
import {IEvent, ISession} from "../shared/index";

@Component({
    // No selector is needed for this component because we reach
    // it directly through routing. e.g. /events/{id}
    templateUrl: "/app/events/event-detail/event-details.component.html",
    styles: [`
        .container {
            padding-left: 20px;
            padding-right: 20px;
        }

        .event-image {
            height: 100px;
        }

        a {
            cursor: pointer;
        }
    `]
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode: boolean;
    filterBy: string = "all";
    sortBy: string = "votes";

    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        // We're resetting the event property but also needs to reset the addMode to make sure
        // it's false whenever we navigate to another page.
        this.activatedRoute.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(Number(params["id"]));
            this.addMode = false;
        });
    }

    addSession(): void {
        this.addMode = true;
    }

    saveNewSession(session: ISession): void {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession(): void {
        this.addMode = false;
    }

}