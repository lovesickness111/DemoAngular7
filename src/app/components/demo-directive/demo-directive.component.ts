import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {

  /**
   * biến kiểm tra có highlight không?
   */
  isHighLight = true;
  /**
   * đối tượng lưu style
   */
  highlightStyle = { background: 'yellow', color: 'white' };

  constructor() { }

  ngOnInit() {
  }

  /**
   * hàm đổi trạng thái property
   */
  switchDirective(){
    this.isHighLight = !this.isHighLight;
  }
}
