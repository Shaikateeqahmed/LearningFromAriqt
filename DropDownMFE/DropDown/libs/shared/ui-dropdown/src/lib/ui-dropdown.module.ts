import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';
import { UiDropdownListComponent } from './ui-dropdown-list/ui-dropdown-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiDropdownComponent, UiDropdownListComponent],
  exports : [UiDropdownComponent, UiDropdownListComponent]
})
export class UiDropdownModule {}
