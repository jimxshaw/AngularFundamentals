import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventService} from "./shared/event.service";

@Component({
    templateUrl: "app/events/create-event.component.html",
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }

        .error input {
            background-color: #E3C3C5;
        }

        .error ::-webkit-input-placeholder {
            color: #999
        }
    `]
})
export class CreateEventComponent {
    // This is a route guard the prevents navigating back to
    // events unless its false.
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {

    }

    saveEvent(formValues): void {
        this.eventService.saveEvent(formValues);
        // Re-assign the route guard so that we can navigate
        // to the route we want.
        this.isDirty = false;
        this.router.navigate(["/events"]);
    }

    cancel(): void {
        this.router.navigate(["/events"]);
    }

}