import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMobileComponent } from './view-mobile/view-mobile.component';

@NgModule({
  imports: [CommonModule, ViewMobileComponent],
  exports : [ViewMobileComponent]
})
export class ViewMobileModule {}
