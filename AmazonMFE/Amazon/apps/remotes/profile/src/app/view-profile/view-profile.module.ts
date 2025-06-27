import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ViewProfileComponent} from '@amazon/view-profile'

const ROUTES : Routes = [
  {path: '', component :ViewProfileComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class ViewProfileModule { }
