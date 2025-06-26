import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProductComponent } from './ui-product/ui-product.component';
import { UiListComponent } from './ui-list/ui-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiProductComponent, UiListComponent],
  exports : [UiProductComponent]
})
export class UiProductModule {}
