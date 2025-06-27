import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOfFourthComponent } from './child-of-fourth/child-of-fourth.component';



@NgModule({
  declarations: [
    ChildOfFourthComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ChildOfFourthComponent
  ]
})
export class FourthModule { }
