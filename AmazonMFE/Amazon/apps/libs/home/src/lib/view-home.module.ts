import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './view-home/view-home.component';

@NgModule({
  imports: [CommonModule, ViewHomeComponent],
  exports : [ViewHomeComponent]
})
export class ViewHomeModule {}
