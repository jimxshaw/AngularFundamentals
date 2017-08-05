import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../shared/index";

@Component({
    selector: "session-list",
    templateUrl: "app/events/event-detail/session-list.component.html"
})
export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        // Is sessions set? If yes then filter the sessions.
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if (filter === "all") {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }

}