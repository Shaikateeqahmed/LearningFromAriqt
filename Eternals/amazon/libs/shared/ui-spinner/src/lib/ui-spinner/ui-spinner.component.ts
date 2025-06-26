import { Component, Input } from '@angular/core';
import { SpinnerConfig } from '../ui-spinner.config';

@Component({
  selector: 'amazon-ui-spinner',
  templateUrl: './ui-spinner.component.html',
  styleUrl: './ui-spinner.component.css',
})
export class UiSpinnerComponent {

  @Input() config ? : SpinnerConfig;
}
