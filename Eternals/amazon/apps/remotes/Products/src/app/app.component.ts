import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {IProducts, ProductsDataService} from 'component-base-data-products';
import {UiCardModule} from 'component-base-ui-card'
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,UiCardModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit{
  title = 'Products';
  #productService = inject(ProductsDataService);
  protected products:IProducts[]=[]
  protected   filteredProducts: IProducts[] = [];

  ngOnInit(): void {
   this.#productService.loadProducts().subscribe((data)=>{
    console.log(data)
    this.products=data
    this.filteredProducts = data;
   })
  }
  filterCategory(category: string): void {
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
}
