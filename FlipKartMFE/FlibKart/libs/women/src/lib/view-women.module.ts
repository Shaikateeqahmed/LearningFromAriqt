import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewWomenComponent } from './view-women/view-women.component';

@NgModule({
  imports: [CommonModule, ViewWomenComponent],
  exports : [ViewWomenComponent]
})
export class ViewWomenModule {}
