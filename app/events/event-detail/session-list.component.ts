import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../shared/index";
import {AuthService} from "../../user/auth.service";
import {VoterService} from "./voter.service";

@Component({
    selector: "session-list",
    templateUrl: "app/events/event-detail/session-list.component.html"
})
export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];
    @Input() sortBy: string;

    constructor(private authService: AuthService, private voterService: VoterService) {

    }

    ngOnChanges() {
        // Is sessions set? If yes then filter the sessions.
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === "name" ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
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

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName);
        }
        else {
            this.voterService.addVoter(session, this.authService.currentUser.userName);
        }

        if (this.sortBy === "votes") {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }

}

function sortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) {
        return 1;
    }
    else if (s1.name === s2.name) {
        return 0;
    }
    else {
        return -1;
    }
}

function sortByVotesDesc(s1: ISession, s2: ISession): number {
    // A positive number, zero or negative number is returned
    // depending on the comparison between session 2 and session 1's
    // voter array lengths.
    return s2.voters.length - s1.voters.length;
}