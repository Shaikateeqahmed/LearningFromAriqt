import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrderComponent } from './view-order/view-order.component';

@NgModule({
  imports: [CommonModule, ViewOrderComponent],
  exports : [ViewOrderComponent]
})
export class ViewOrderModule {}
