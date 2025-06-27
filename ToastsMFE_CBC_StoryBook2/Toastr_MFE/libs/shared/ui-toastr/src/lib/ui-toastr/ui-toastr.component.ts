import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfigToastr } from '../ui-toastr.config';
@Component({
  selector: 'ui-toastr',
  templateUrl: './ui-toastr.component.html',
  styleUrl: './ui-toastr.component.css',
})
export class UiToastrComponent {

  @Input() config? : ConfigToastr;

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    // this.toastr.success('Hello world!', 'Toastr fun!',{
    //   positionClass: 'toast-bottom-right'
    // });
    if(this.config?.type=="success"){
      this.toastr.success( this.config?.massage, this.config?.title, {
        positionClass: this.config?.position
      });
    }else if(this.config?.type=="error"){
      this.toastr.error( this.config?.massage, this.config?.title, {
        positionClass: this.config?.position
      });
    }else if(this.config?.type=="info"){
      this.toastr.info( this.config?.massage, this.config?.title, {
        positionClass: this.config?.position
      });
    }else if(this.config?.type=="warning"){
      this.toastr.warning( this.config?.massage, this.config?.title, {
        positionClass: this.config?.position
      });
    }
   
  }
}
