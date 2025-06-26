import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMobileComponent } from '@flib-kart/view-mobile'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {
    path : '',
    component : ViewMobileComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewMobileModule { }
