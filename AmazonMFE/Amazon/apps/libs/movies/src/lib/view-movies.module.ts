import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMoviesComponent } from './view-movies/view-movies.component';

@NgModule({
  imports: [CommonModule, ViewMoviesComponent],
  exports : [ViewMoviesComponent]
})
export class ViewMoviesModule {}
