import { Component, Input } from '@angular/core';
import { DropDownConfig } from './ui-dropdown.config';
@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrl: './ui-dropdown.component.css',
})
export class UiDropdownComponent {
  @Input() Config ? : DropDownConfig;
}
