import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(private create : ProductService){}

  addProduct = new FormGroup({
    category : new FormControl('',[Validators.required]),
    productName : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    rating : new FormControl('',[Validators.required]),
    price : new FormControl('',[Validators.required]),
    productImg : new FormControl('',[Validators.required]),
    IsAvailable : new FormControl(true),
    reviews : new FormControl(),

  })
  addProductForm(){
    console.log(this.addProduct.value)
    this.create.createProduct(this.addProduct.value).subscribe(data=>{
      console.log(data);
    })
  }
}
