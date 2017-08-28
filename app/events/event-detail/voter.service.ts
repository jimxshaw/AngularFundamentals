import {Injectable} from "@angular/core";
import {ISession} from "../shared/event.model";

@Injectable()
export class VoterService {
    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    userHasVoted(session: ISession, voterName: string) {
        // The some method returns true if at least one element in the
        // collection matches a condition.
        return session.voters.some(voter => voter === voterName);
    }
}