import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormComponent } from './ui-form/ui-form.component';
import { UiButtonModule } from 'ui-button'
import { ReactiveFormsModule } from '@angular/forms';
import { UiSpinnerModule } from 'ui-spinner'
@NgModule({
  imports: [CommonModule, UiButtonModule, ReactiveFormsModule, UiSpinnerModule],
  declarations: [UiFormComponent],
  exports : [UiFormComponent]
})
export class UiFormModule {}
