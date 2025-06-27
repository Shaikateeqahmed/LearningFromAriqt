import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentOfFirstComponent } from './parent-of-first/parent-of-first.component';
import { ChildOfFirstComponent } from './child-of-first/child-of-first.component';
import { SecondModule } from '../second/second.module';



@NgModule({
  declarations: [
    ParentOfFirstComponent,
    ChildOfFirstComponent
  ],
  imports: [
    CommonModule,
    SecondModule
  ],
  exports: [
    ParentOfFirstComponent
  ]
})
export class FirstModule { }
