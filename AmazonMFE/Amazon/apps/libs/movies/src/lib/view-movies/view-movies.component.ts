import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-view-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-movies.component.html',
  styleUrl: './view-movies.component.css',
})
export class ViewMoviesComponent {}
