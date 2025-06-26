import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMenComponent } from '@flib-kart/view-men'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {
    path : '',
    component : ViewMenComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewMenModule { }
