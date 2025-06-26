import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-dropdown-button',
  templateUrl: './ui-dropdown-button.component.html',
  styleUrl: './ui-dropdown-button.component.css',
})
export class UiDropdownButtonComponent {
  @Output() toggleDropdown = new EventEmitter<void>();

  onButtonClick() {
    this.toggleDropdown.emit();
  }

}
