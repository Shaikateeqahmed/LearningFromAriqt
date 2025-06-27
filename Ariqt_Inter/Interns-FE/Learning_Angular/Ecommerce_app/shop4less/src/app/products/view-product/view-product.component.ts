import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor (private route : ActivatedRoute, private product : ProductService){}
  productdis: any = {};
  ngOnInit(): void {
    this.route.params.subscribe(data =>{
     this.product.getProductByID(data['id']).subscribe(data=>{
      console.log(data);
      this.productdis = data;
     })
    })
  }
}
