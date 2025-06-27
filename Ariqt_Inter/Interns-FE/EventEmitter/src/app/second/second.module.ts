import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModule } from '../first/first.module';
import { ParentOfOtherModuleComponent } from './parent-of-other-module/parent-of-other-module.component';



@NgModule({
  declarations: [
  
    ParentOfOtherModuleComponent
  ],
  imports: [
    CommonModule,
    FirstModule
  ],
  exports : [
    ParentOfOtherModuleComponent
  ]
})
export class SecondModule { }
