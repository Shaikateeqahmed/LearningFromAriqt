import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPaymentComponent } from '@amazon/view-payment'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes =[
  {path: '', component: ViewPaymentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewPaymentModule { }
