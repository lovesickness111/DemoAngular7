import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('color') color: string;
  // tslint:disable-next-line:no-input-rename
  @Input('size') size: number;

  content = `this is a test paragraph`;
  constructor() { }

  ngOnInit() {
  }
  /**
   * func interact with child template
   */
  setStyle() {
    return {
      'color': this.color,
      'font-size': this.size + `px`
    };
  }
  /**
   * set size
   */
  setSize(event) {
    this.size = event ;
  }
}
