import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';
import {Product} from './product'
import {Category} from '../site-framework/category'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  
  ProductUrl = `http://localhost:3000/products/`;

  getProducts(): Observable<Product>{
    return this.http.get<Product>(this.ProductUrl);
  }
  getProductByID(id : any){
    return this.http.get(this.ProductUrl+id);
  }
  searchByCategory(category : any){
    const params = new HttpParams().set('category',category);
     return this.http.get(this.ProductUrl,{params : params})
  }
  searchByAvailability(isAvailable : any){
    const params = new HttpParams().set('isAvailable',isAvailable);
     return this.http.get(this.ProductUrl,{params : params})
  }
  createProduct(body : Object){
   return this.http.post(this.ProductUrl,body);
  }
  updateProduct(body : Object, id : any){
    return this.http.put(this.ProductUrl+id,body);
  }
  deleteProduct(id : any){
    return this.http.delete(this.ProductUrl+id);
  }
  getCatogories():Observable<Category>{
    const categoryUrl = `http://localhost:3000/categories/`;
    return this.http.get<Category>(categoryUrl);
  }
}
