import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMoviesComponent } from '@amazon/view-movies'
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {
    path : '',
    component : ViewMoviesComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewMoviesModule { }
