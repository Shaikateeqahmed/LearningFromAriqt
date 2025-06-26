import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardModule } from 'component-base-ui-card'
import {IProducts, ProductsDataService} from 'component-base-data-products';
import { UiToastrModule } from 'component-base-ui-toastr'
@Component({
  selector: 'app-ui-cart',
  standalone: true,
  imports: [CommonModule, UiCardModule, UiToastrModule],
  templateUrl: './ui-cart.component.html',
  styleUrl: './ui-cart.component.css',
})
export class UiCartComponent {

  constructor(private productsService : ProductsDataService){}

  dataObj : any;
  PriceAfterDiscount : number = 0;

  ngOnInit(){
    this.productsService.loadProducts().subscribe((data)=>{
      this.dataObj = data.filter((el)=>{
        return el.id === 1
      })
    })
    console.log(this.dataObj)

    this.PriceAfterDiscount = this.dataObj[0].price - this.dataObj[0].discount
  }


}
