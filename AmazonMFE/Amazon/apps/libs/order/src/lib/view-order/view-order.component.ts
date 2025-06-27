import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSpinnerModule,spinnerSize, spinnerType } from 'Shared-ui-spinner'
@Component({
  selector: 'lib-view-order',
  standalone: true,
  imports: [CommonModule, UiSpinnerModule],
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.css',
})
export class ViewOrderComponent {

  showOrders : any = false;

  constructor(){
    setTimeout(() => {
      this.showOrders = true
    },1000);
  }
 
  spinnerSize : spinnerSize = spinnerSize.Small;
  spinnerType : spinnerType = spinnerType.Primary

}
