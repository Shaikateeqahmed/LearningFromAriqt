import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastrConfig } from '../ui-toastr.config';

@Component({
  selector: 'amazon-ui-toastr',
  templateUrl: './ui-toastr.component.html',
  styleUrl: './ui-toastr.component.css',
})
export class UiToastrComponent {

  @Input() config ? : ToastrConfig;

  showSuccessBound: () => void;
  constructor(private toastr: ToastrService) {
    this.showSuccessBound = this.showSuccess.bind(this);
  }
  showSuccess() {
    // console.log("toastr")
    // this.toastr.success('Hello world!', 'Toastr fun!',{
    //   positionClass: 'toast-bottom-right'
    // });
    if(this.config?.toastrType=="success"){
      this.toastr.success( this.config?.massage, this.config?.title, {
        positionClass: this.config?.position
      });
    }else if(this.config?.toastrType=="error"){
      this.toastr.error( this.config?.massage, this.config?.title, {
        positionClass: this.config?.position
      });
    }else if(this.config?.toastrType=="info"){
      this.toastr.info( this.config?.massage, this.config?.title, {
        positionClass: this.config?.position
      });
    }else if(this.config?.toastrType=="warning"){
      this.toastr.warning( this.config?.massage, this.config?.title, {
        positionClass: this.config?.position
      });
    }
   
  }
}
