import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';
@Directive({
  selector: '[appChangeStatus]'
})
export class ChangeStatusDirective {
  /**
   * hàm khởi tạo đồng thời thực hiện chức năng của directive
   * @param Element instance mà thẻ directive nằm trong
   */
  constructor(Element: ElementRef) {
    Element.nativeElement.addEventListener('click', function () {Element.nativeElement.innerText = `Change`});
  }

}
