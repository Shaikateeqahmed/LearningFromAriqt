import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiVCComponent } from './ui-vc/ui-vc.component';
import { UiChildComponent } from './ui-child/ui-child.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiVCComponent, UiChildComponent],
  exports : [UiVCComponent]
})
export class UiVCModule {}
