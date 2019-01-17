import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size-setting',
  templateUrl: './size-setting.component.html',
  styleUrls: ['./size-setting.component.scss']
})
export class SizeSettingComponent implements OnInit {
  /**
   * size default
   */
  // tslint:disable-next-line:no-input-rename
  @Input('size') sizeDefault: number;
  // tslint:disable-next-line:no-output-rename
  @Output('outSize') sizeConnector = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  /**
   * change size
   */
  upSize() {
    if (this.sizeDefault + 2 <= 36) {
      this.sizeDefault += 4;
      this.sizeConnector.emit(this.sizeDefault);
    }
  }
  downSize() {
    if (this.sizeDefault - 2 >= 8) {
      this.sizeDefault -= 2;
      this.sizeConnector.emit(this.sizeDefault);
    }

  }
}
