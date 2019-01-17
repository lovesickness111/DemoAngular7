import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  colors: string[] = [];
  /**
   * need to declare an output to pass color outcome appComponent
   */
  // tslint:disable-next-line:no-output-rename
  @Output('outColor') colorConnector = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.colors = ['red', 'green', 'blue', 'black', 'yellow', 'brown', 'orange', 'wheat'];
  }

  /**
   * chose color from this template
   */
  outColor(color: string) {
    this.colorConnector.emit(color);
  }
}
