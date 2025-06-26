import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewKidsComponent } from './view-kids/view-kids.component';

@NgModule({
  imports: [CommonModule, ViewKidsComponent],
  exports : [ViewKidsComponent]
})
export class ViewKidsModule {}
