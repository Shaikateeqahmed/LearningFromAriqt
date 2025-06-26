import { Component, Input } from '@angular/core';
import { ConfigButton } from '../ui-button.config';

@Component({
  selector: 'amazon-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {

  @Input() config? : ConfigButton;

  handleClick(): void {
    if (this.config?.onClick) {
      this.config?.onClick();
    }
  }

}
