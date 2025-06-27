import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToastrComponent } from './ui-toastr/ui-toastr.component';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [CommonModule],
  declarations: [UiToastrComponent, UiToastrComponent],
  exports : [UiToastrComponent]
})
export class UiToastrModule {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
