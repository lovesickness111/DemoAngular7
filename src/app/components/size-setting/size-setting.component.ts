import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
@Component({
  selector: 'app-size-setting',
  templateUrl: './size-setting.component.html',
  styleUrls: ['./size-setting.component.scss']
})
export class SizeSettingComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  // giá trị để test binding
  value = ` Size Setting`;
  // giá trị test doCheck
  count: number;
  /**
   * size default
   */
  // tslint:disable-next-line:no-input-rename
  @Input('size') sizeDefault: number;
  // tslint:disable-next-line:no-output-rename
  @Output('outSize') sizeConnector = new EventEmitter();
  constructor() { console.log(`constructor-SizeSettingComponent`); }
  /**
   * onchange
   */
  ngOnChanges(simple: SimpleChanges) {
    console.log(`OnChanges-SizeSettingComponent`);
    console.log(simple);

  }
  /**
   * oninit
   */
  ngOnInit() {
    console.log(`OnInit-SizeSettingComponent`);
    this.count = 0;
  }

  /**
   * hàm Docheck, cứ gọi OnChanges hoặc Oninit thì Docheck được gọi
   */
  ngDoCheck() {
    this.count++;
    console.log(`DoCheck-SizeSettingComponent:  ${this.count}`);
  }
  /**
   * hàm hủy component
   */
  ngOnDestroy() {
    console.log(`OnDestroy - SizesettingComponent`);
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
