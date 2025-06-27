import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPaymentComponent } from './view-payment/view-payment.component';

@NgModule({
  imports: [CommonModule, ViewPaymentComponent],
  exports : [ViewPaymentComponent]
})
export class ViewPaymentModule {}
