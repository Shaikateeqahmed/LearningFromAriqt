import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { spinnerSize, spinnerType, UiSpinnerModule } from 'Shared-ui-spinner'
@Component({
  selector: 'lib-view-product',
  standalone: true,
  imports: [CommonModule, UiSpinnerModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css',
})
export class ViewProductComponent {
  showProducts : any = false;

  constructor(){
    setTimeout(() => {
      this.showProducts = true
    },1000);
  }
 
  spinnerSize : spinnerSize = spinnerSize.Large;
  spinnerType : spinnerType = spinnerType.Danger
}
