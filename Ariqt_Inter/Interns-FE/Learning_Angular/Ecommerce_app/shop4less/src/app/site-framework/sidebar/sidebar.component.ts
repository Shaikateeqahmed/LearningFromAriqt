import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../products/product.service"
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
constructor(private product : ProductService, private router : Router, private route : ActivatedRoute){};
category_list : any = [];
ngOnInit() : void{
  this.product.getCatogories().subscribe(data=>{
    console.log(data);
    this.category_list = data;
  })
}
navigateTo(link: any,name:any){
  console.log(name)
//  this.router.navigate([`${link.split('?')[0]}`,{queryParams:{category : name}}]); 
// this.router.navigate([
//   link
// ], { relativeTo: this.route, queryParams: {"category":name} });
this.router.navigate(
  [link],
  { queryParams: { category: name } }
);
}
}
