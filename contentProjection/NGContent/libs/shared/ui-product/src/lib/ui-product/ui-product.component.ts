import { Component } from '@angular/core';

@Component({
  selector: 'lib-ui-product',
  templateUrl: './ui-product.component.html',
  styleUrl: './ui-product.component.css',
})
export class UiProductComponent {

  Products = [{id : 1, name : 'a', price : '100'},
    {id : 2, name : 'b', price : '100'},
    {id : 3, name : 'c', price : '100'}
  
  ]

}
