import {Component, Input} from "@angular/core";

@Component({
    selector: "event-thumbnail",
    templateUrl: "app/events/event-thumbnail.component.html",
    styles: [`
        .thumbnail { min-height: 210px; min-width: 300px; }
        .pad-left { margin-left: 25px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;


}