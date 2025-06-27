import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToastComponent } from './ui-toast/ui-toast.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiToastComponent],
  exports: [UiToastComponent],

})
export class UiToastModule {}
