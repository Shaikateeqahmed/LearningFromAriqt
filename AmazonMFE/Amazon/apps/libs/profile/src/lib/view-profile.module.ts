import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@NgModule({
  imports: [CommonModule, ViewProfileComponent],
  exports: [ViewProfileComponent]
})
export class ViewProfileModule {}
