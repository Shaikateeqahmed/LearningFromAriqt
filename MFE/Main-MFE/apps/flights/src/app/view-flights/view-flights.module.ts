import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewFlightsComponent} from '@main-mfe/flight-lib'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [{
  path : '',
  component : ViewFlightsComponent
}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewFlightsModule { }
