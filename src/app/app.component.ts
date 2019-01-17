import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  getDefault(event) {

    this.fontSizeDefault = 16;
    this.colorDefault = `black`;

  }
}
