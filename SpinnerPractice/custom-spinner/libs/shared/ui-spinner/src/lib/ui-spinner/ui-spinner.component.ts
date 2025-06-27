import { Component, Input } from '@angular/core';
import { SpinnerSize, SpinnerType } from '../Models/spinner.model';

@Component({
  selector: 'lib-ui-spinner',
  templateUrl: './ui-spinner.component.html',
  styleUrl: './ui-spinner.component.css',
})
export class UiSpinnerComponent {
  
  @Input() size! : SpinnerSize;
  @Input() type! : SpinnerType;

}
