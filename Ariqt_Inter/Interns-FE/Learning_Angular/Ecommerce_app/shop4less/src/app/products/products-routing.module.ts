import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductByIDComponent } from './view-product-by-id/view-product-by-id.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';

const routes: Routes = [{ path: '', component: ViewAllProductComponent },
{ path: 'create-product', component: CreateProductComponent },
{ path: 'view-product/:id', component: ViewProductComponent },
{ path: 'delete-product/:id', component: DeleteProductComponent },
{ path: 'update-product/:id', component: UpdateProductComponent },
{ path: 'category', component: ViewProductByIDComponent },
{ path: 'search-available', component: ViewProductByDateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
