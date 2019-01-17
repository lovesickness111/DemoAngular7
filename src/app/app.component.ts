import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * biến show hiện/ ẩn component
   */
  isShowing = false;
  // màu và size mặc định
  colorDefault = `black`;
  fontSizeDefault = 16;
  /**
   * create new function to get color from colorPicker.component 
   */
  getColor(event) {
    this.colorDefault = event;
  }
  /**
   * getSize
   */
  getSize(event) {
    this.fontSizeDefault = event;
  }
  /**
   * chuyển màu
   * @param event 
   */
  getDefault(event) {

    this.fontSizeDefault = 16;
    this.colorDefault = `black`;

  }
  /**
   * toggle component
   */
  toggleShowSetting(){
    this.isShowing = !this.isShowing;
  }
}
