import { Directive } from '@angular/core';

@Directive({
  selector: '[libUiCardBody], lib-ui-card-body', // Match attribute and element
})
export class CardBodyDirective {
  constructor() {}
}
