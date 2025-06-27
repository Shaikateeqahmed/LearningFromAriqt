import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  
  constructor (private route : ActivatedRoute,private update : ProductService){}
  ID : number =0;
  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      console.log(data["id"]);  
      this.ID = data["id"];
    })
  }
  updateProduct = new FormGroup({
    category : new FormControl('',[Validators.required]),
    productName : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    rating : new FormControl('',[Validators.required]),
    price : new FormControl('',[Validators.required]),
    productImg : new FormControl('',[Validators.required]),
    IsAvailable : new FormControl(true),
    reviews : new FormControl(),

  })
  updateProductForm(){
    console.log(this.updateProduct.value);
    this.update.updateProduct(this.updateProduct.value,this.ID).subscribe(data=>{
      console.log(data);
    })
  }
}
