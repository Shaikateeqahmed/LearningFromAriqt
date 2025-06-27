import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewProductComponent} from '@amazon/view-product'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {path:'', component: ViewProductComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewProductModule { }
