import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../ui-button.config'

@Component({
  selector: 'lib-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {

  @Input() config? : ButtonConfig

  showSpinner : boolean = false;

  handleClick(): void {
    if (this.config?.onClick) {
      this.showSpinner = true;
      setTimeout(()=>{
         this.showSpinner = false
      },2000)
    }
  }
}
