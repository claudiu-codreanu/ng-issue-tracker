import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  @Input() issue: Issue | null = null;
  @Output() formClose = new EventEmitter<boolean>();

  issueForm: FormGroup | undefined;

  constructor(private issueService: IssuesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      issueNo: [this.issue?.issueNo],
      title: [this.issue?.title, Validators.required],
      description: [this.issue?.description],
      priority: [this.issue?.priority, Validators.required]
    })
  }

  save() {
    if(this.issueForm?.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.issueService.updateIssue(this.issueForm?.value);
    this.issue = null;

    this.formClose.emit(true);
  }

  cancel() {
    this.issue = null;
    this.formClose.emit(false);
  }
}
