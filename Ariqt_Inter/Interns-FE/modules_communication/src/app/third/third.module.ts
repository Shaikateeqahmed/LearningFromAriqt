import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentOfThirdComponent } from './parent-of-third/parent-of-third.component';
import { ChildOfThirdComponent } from './child-of-third/child-of-third.component';
import { FourthModule } from '../fourth/fourth.module';



@NgModule({
  declarations: [
    ParentOfThirdComponent,
    ChildOfThirdComponent
  ],
  imports: [
    CommonModule,
    FourthModule
  ],
  exports :[
    ParentOfThirdComponent
  ]
})
export class ThirdModule { }
