import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() issueNo: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  agree() {
    this.issueNo = null;
    this.confirm.emit(true);
  }

  disagree() {
    this.issueNo = null;
    this.confirm.emit(false);
  }

}
