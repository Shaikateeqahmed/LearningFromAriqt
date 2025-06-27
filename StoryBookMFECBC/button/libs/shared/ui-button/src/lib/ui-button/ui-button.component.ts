import { Component, Input, input } from '@angular/core';
import { ButtonConfig } from '../button.config';
@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {
handleClick() {
throw new Error('Method not implemented.');
}
  // @Input()
  // config? : ButtonConfig;
  
  @Input() text = 'Click me!';
  @Input() padding = 10;
  @Input() disabled = true;
}
