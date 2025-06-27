import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  imports: [CommonModule, ViewProductComponent],
  exports : [ViewProductComponent]
})
export class ViewProductModule {}
