import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMenComponent } from './view-men/view-men.component';

@NgModule({
  imports: [CommonModule, ViewMenComponent],
  exports : [ViewMenComponent]
})
export class ViewMenModule {}
