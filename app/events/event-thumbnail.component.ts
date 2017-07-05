import {Component, Input} from "@angular/core";

@Component({
    selector: "event-thumbnail",
    templateUrl: "app/events/event-thumbnail.component.html"
})
export class EventThumbnailComponent {
    @Input() event: any;

    someProp: string = "This is some prop on a child component.";

    logMessage() {
        console.log("Logging a message!");
    }
}