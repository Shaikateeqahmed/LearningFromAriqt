import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrderComponent } from '@amazon/view-order'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {path : '', component: ViewOrderComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewOrderModule { }
