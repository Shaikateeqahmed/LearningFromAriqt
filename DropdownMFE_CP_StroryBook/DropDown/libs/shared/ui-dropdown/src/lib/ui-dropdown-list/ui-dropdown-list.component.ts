import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-dropdown-list',
  templateUrl: './ui-dropdown-list.component.html',
  styleUrl: './ui-dropdown-list.component.css',
})
export class UiDropdownListComponent {
  @Input() isOpen: boolean = false;

}
