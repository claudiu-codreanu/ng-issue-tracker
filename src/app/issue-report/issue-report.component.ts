import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  issueForm: FormGroup | undefined;

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  @Output() formClose = new EventEmitter();

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: [''],
      description: [''],
      priority: [''],
      type: ['']
    });
  }

  addIssue() {
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
