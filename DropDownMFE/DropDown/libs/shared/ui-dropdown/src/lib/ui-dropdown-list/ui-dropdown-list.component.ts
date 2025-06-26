import { Component, Input } from '@angular/core';
import { DropDownMenuConfig } from './ui-dropdown-list.config';
@Component({
  selector: 'ui-dropdown-list',
  templateUrl: './ui-dropdown-list.component.html',
  styleUrl: './ui-dropdown-list.component.css',
})
export class UiDropdownListComponent {
  @Input() menuConfig? : DropDownMenuConfig;

  ngAfterInit(){
    console.log(this.menuConfig)
  }
}
