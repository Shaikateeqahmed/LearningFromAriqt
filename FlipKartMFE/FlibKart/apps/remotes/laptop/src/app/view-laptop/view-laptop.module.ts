import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLaptopComponent } from '@flib-kart/view-laptop'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {
    path : '',
    component : ViewLaptopComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewLaptopModule { }
