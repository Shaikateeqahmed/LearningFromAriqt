import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiListComponent } from './ui-list/ui-list.component';
import { UiCardModule } from 'component-base-ui-card';

@NgModule({
  imports: [CommonModule, UiCardModule],
  declarations: [UiListComponent],
  exports: [UiListComponent],
})
export class UiListModule {}
