import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOfSecondComponent } from './child-of-second/child-of-second.component';



@NgModule({
  declarations: [
    ChildOfSecondComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildOfSecondComponent
  ]
})
export class SecondModule { }
