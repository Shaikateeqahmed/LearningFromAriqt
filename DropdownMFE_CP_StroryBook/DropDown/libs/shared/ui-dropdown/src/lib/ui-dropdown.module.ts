import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDropdownButtonComponent } from './ui-dropdown-button/ui-dropdown-button.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';
import { UiDropdownListComponent } from './ui-dropdown-list/ui-dropdown-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiDropdownButtonComponent,
    UiDropdownComponent,
    UiDropdownListComponent,
  ],
  exports: [
    UiDropdownButtonComponent,
    UiDropdownComponent,
    UiDropdownListComponent,
  ],
})
export class UiDropdownModule {}
