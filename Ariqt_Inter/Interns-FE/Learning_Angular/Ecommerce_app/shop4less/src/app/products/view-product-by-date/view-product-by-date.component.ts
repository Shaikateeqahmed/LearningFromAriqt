import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-view-product-by-date',
  templateUrl: './view-product-by-date.component.html',
  styleUrls: ['./view-product-by-date.component.css']
})
export class ViewProductByDateComponent {
  constructor(private route : ActivatedRoute,private product : ProductService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      console.log(data["isAvailable"]);
      this.product.searchByAvailability(data["isAvailable"]).subscribe(data=>{
        console.log(data);
      })
    })
  }
}
