import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewWomenComponent } from '@flib-kart/view-women'
import { Route, RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {
    path : '',
    component : ViewWomenComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewWomenModule { }
