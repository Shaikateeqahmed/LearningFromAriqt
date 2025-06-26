import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToastrComponent } from './ui-toastr/ui-toastr.component';
import { UiButtonModule } from 'component-base-ui-button'
@NgModule({
  imports: [CommonModule,UiButtonModule
    
  ],
  declarations: [UiToastrComponent],
  exports: [UiToastrComponent],
})
export class UiToastrModule {}
