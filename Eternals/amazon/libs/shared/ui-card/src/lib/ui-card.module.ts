import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiButtonModule } from 'component-base-ui-button';
@NgModule({
  imports: [CommonModule, UiButtonModule],
  declarations: [UiCardComponent],
  exports: [UiCardComponent],
})
export class UiCardModule {}
