import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewGamingComponent } from './view-gaming/view-gaming.component';
@NgModule({
  imports: [CommonModule, ViewGamingComponent],
  exports : [ViewGamingComponent]
})
export class ViewGamingModule {}
