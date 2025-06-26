import { Directive } from '@angular/core';

@Directive({
  selector: '[libUiCardFooter], lib-ui-card-footer', // Match attribute and element
})
export class CardFooterDirective {
  constructor() {}
}
