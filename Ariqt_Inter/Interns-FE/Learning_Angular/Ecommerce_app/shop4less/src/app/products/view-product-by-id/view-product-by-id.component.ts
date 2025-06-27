import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../product.service'
import { Category } from 'src/app/site-framework/category';
@Component({
  selector: 'app-view-product-by-id',
  templateUrl: './view-product-by-id.component.html',
  styleUrls: ['./view-product-by-id.component.css']
})
export class ViewProductByIDComponent implements OnInit {

  categoryList : any = [];

  constructor(private route : ActivatedRoute,private product : ProductService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      console.log(data["category"]);
      this.product.searchByCategory(data["category"]).subscribe(data => {
        console.log(data);
        this.categoryList = data;
      })
    })
  }
  deleteProduct(id : any){
    console.log(id);
    let x = window.confirm("Do u want to delete the product");
    console.log(x);
    if(x){
     this.product.deleteProduct(id).subscribe(data=>{
       console.log(data);
       this.product.getProducts().subscribe(data=>{
         this.categoryList = data;
       })
     })
    }else{
     return;
    }
   }
}
