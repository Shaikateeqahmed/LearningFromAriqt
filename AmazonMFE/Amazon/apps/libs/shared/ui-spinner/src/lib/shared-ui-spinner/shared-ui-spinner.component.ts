import { Component, Input } from '@angular/core';
import { spinnerSize, spinnerType } from '../Models/spinner.model';

@Component({
  selector: 'shared-ui-spinner',
  templateUrl: './shared-ui-spinner.component.html',
  styleUrl: './shared-ui-spinner.component.css',
})
export class SharedUiSpinnerComponent {
  
  @Input() size! : spinnerSize;
  @Input() type! : spinnerType;
}
