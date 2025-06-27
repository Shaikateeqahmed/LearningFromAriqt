import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiSpinnerComponent } from './shared-ui-spinner/shared-ui-spinner.component';

@NgModule({
  imports: [CommonModule],
  exports : [SharedUiSpinnerComponent],
  declarations: [SharedUiSpinnerComponent],
})
export class UiSpinnerModule {}
