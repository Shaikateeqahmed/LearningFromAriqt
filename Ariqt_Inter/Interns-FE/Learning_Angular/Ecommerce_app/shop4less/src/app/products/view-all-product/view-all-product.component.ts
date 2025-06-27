import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service'
import {DeleteProductComponent} from '../delete-product/delete-product.component'
@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  constructor(private products: ProductService) { };
  loading = true;

 Product_list : any = []
  ngOnInit(): void {
     this.products.getProducts().subscribe(data=>{
      console.log(data);
      this.Product_list = data;
      this.loading= false;
     })
  }

  deleteProduct(id : any){
   console.log(id);
   let x = window.confirm("Do u want to delete the product");
   console.log(x);
   if(x){
    this.products.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.products.getProducts().subscribe(data=>{
        this.Product_list = data;
        this.loading= false;
      })
    })
   }else{
    return;
   }
  }

  // deleteProduct(id : any){
  //   console.log(id);
  //   let x = window.confirm("Do u want to delete the product");
  //   console.log(x);
  //   if(x){
  //    this.deletecomponent.deleteMethod(id);
  //   }else{
  //    return;
  //   }
  //  }

}
