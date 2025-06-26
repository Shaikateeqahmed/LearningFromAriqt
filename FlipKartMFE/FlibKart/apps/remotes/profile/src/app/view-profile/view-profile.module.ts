import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from '@flib-kart/view-profile';
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
{path: '',
  component : ViewProfileComponent
}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewProfileModule { }
