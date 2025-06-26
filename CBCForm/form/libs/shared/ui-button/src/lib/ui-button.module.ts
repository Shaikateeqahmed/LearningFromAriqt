import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiSpinnerModule } from 'ui-spinner'

@NgModule({
  imports: [CommonModule, UiSpinnerModule],
  declarations: [UiButtonComponent],
  exports : [UiButtonComponent]
})
export class UiButtonModule {}
