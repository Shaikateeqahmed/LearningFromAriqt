import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewGamingComponent } from '@flib-kart/view-gaming'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {
    path : '',
    component : ViewGamingComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewGamingModule { }
