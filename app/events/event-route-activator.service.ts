import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {EventService} from "./shared/event.service";

// This service is to guard against unintended route access or enforce
// certain routes.

@Injectable()
export class EventRouteActivatorService implements CanActivate {

    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // Use the event service to capture the present event route by passing in the
        // id from the url, then cast it to a boolean. If the event does not exist
        // then have the router force the user to go to the status 404 page.
        const eventExists = Boolean(this.eventService.getEvent(Number(route.params["id"])));

        if (!eventExists) {
            this.router.navigate(["/404"]);
        }

        return eventExists;
    }

}