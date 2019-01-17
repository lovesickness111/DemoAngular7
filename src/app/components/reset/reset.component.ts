import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('resetDefault') styleDefaultConnect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  setValueDefault() {
    this.styleDefaultConnect.emit();
  }

}
