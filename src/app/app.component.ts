import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  /**
   * biến show hiện/ ẩn component
   */
  isShowing = false;
  // màu và size mặc định
  colorDefault = `black`;
  fontSizeDefault = 16;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    $('.container').hide();
  }
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
  toggleShowSetting() {
    this.isShowing = !this.isShowing;
  }
}
