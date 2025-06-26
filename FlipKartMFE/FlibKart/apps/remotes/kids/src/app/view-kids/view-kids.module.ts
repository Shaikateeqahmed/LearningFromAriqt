import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewKidsComponent } from '@flib-kart/view-kids'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes =[
  {
    path : '',
    component : ViewKidsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewKidsModule { }
