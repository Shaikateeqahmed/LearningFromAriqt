import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor (private route : ActivatedRoute, private product : ProductService){}

  deleteMethod(id : any){
     
      this.product.deleteProduct(id).subscribe(data=>{
        console.log(data);
    })
  }
  ngOnInit(): void {
    // this.route.params.subscribe(data =>{
    //   console.log(data["id"]);  
    //   this.product.deleteProduct(data["id"]).subscribe(data=>{
    //     console.log(data);
    //   })
    // })
  }
}
