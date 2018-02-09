import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from "../index";

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    @Input() sessions: ISession[]
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVotes)
        }


    }
    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0)
        } else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter)
        }
    }
}

function sortByName(s1: ISession, s2: ISession)
{
    if (s1.name > s2.name) {
        return 1;
    }

    if (s1.name < s2.name) {
        return -1;
    }

    return 0;
}

function sortByVotes(s1: ISession, s2: ISession)
{
    if (s1.voters.length > s2.voters.length) {
        return 1;
    }

    if (s1.voters.length > s2.voters.length) {
        return -1;
    }

    return 0;
}