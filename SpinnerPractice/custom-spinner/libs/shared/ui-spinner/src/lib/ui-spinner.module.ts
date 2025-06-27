import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSpinnerComponent } from './ui-spinner/ui-spinner.component';

@NgModule({
  imports: [CommonModule],
  exports : [UiSpinnerComponent],
  declarations: [UiSpinnerComponent],
})
export class UiSpinnerModule {}
