import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {EventService} from "./shared/event.service";

@Injectable()
export class EventsListResolverService implements Resolve<any> {

    constructor(private eventService: EventService) {

    }

    resolve() {
        // We're calling EventService's getEvents and it's returning an observable.
        // By calling map on that observable we're getting access to the events
        // that are passed in on that stream while still returning an observable.
        // If we called subscribe then we'd get an returned subscription object.
        return this.eventService.getEvents().map((events) => { return events; });
    }
}