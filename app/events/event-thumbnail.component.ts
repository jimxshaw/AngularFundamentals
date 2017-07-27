import {Component, Input} from "@angular/core";
import {IEvent} from "./shared/index"

@Component({
    selector: "event-thumbnail",
    templateUrl: "app/events/event-thumbnail.component.html",
    styles: [`
        .gold {
            color: gold !important;
        }

        .bold {
            font-weight: bold;
        }

        .thumbnail {
            min-height: 210px;
            min-width: 300px;
        }

        .pad-left {
            margin-left: 25px;
        }

        .well div {
            color: #bbb;
        }
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === "8:00 am";

        return {
            gold: isEarlyStart,
            bold: isEarlyStart
        };
    }

}