import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from '@amazon/view-home'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {
    path : '',
    component : ViewHomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewHomeModule { }
