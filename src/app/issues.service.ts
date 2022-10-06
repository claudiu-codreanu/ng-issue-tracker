import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[] = issues;

  constructor() { }

  getPendingIssues() : Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const closedIssue = {
      ...issue,
      completed: new Date()
    };

    const i = this.issues.findIndex(iss => iss === issue);
    this.issues[i] = closedIssue;
  }

  getSuggestions(title: string): Issue[] {
    if(title.length <= 3) {
      return [];
    }

    return this.issues.filter(issue => issue.title.indexOf(title) !== -1)
  }
}
