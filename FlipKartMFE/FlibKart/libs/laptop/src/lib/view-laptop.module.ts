import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLaptopComponent } from './view-laptop/view-laptop.component';

@NgModule({
  imports: [CommonModule, ViewLaptopComponent],
  exports : [ViewLaptopComponent]
})
export class ViewLaptopModule {}
