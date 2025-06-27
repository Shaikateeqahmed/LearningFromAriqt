import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-view-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-flights.component.html',
  styleUrl: './view-flights.component.css',
})
export class ViewFlightsComponent {}
