import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-demo-jquery',
  templateUrl: './demo-jquery.component.html',
  styleUrls: ['./demo-jquery.component.scss']
})
export class DemoJqueryComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    let currentTime = new Date();
    for (let i = 0; i < 10000; i++) {
      $('#container').append('<p></p>');
    }
    $('p').text('abc');
    let lastTime = new Date();
    let result = lastTime.getTime() - currentTime.getTime();
    console.log(`Thời gian thực hiện solution 1: ${result}`);
    // cach 2

     currentTime = new Date();
    for (let i = 0; i < 10000; i++) {
      $('#container').append('<p>abc</p>');
    }
     lastTime = new Date();
     result = lastTime.getTime() - currentTime.getTime();
    console.log(`Thời gian thực hiện solution 2: ${result}`);
  }
}
