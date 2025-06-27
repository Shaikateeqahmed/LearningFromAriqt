import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFlightsComponent } from './view-flights/view-flights.component';

@NgModule({
  imports: [CommonModule, ViewFlightsComponent],
  declarations : [],
  exports : [ViewFlightsComponent]
})
export class FlightLibModule {}
