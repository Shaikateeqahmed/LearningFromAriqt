import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, resource, ResourceStatus, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resourceAndrxResource';

  //angular singals dont have much support for async opperations, untill now.

  private url = 'https://swapi.py4e.com/api/vehicles';
  http= inject(HttpClient);

  selectedProductId = signal<number | null>(null);
  color = signal('slate gray');
  // products = resource({
  //   loader : () => fetch(this.url).then(res => res.json() as Promise<ProductResponse>)
  // })

  products = rxResource({
    loader : () => this.http.get<ProductResponse>(this.url)
  })

  // product = rxResource({
  //   request: () => ({
  //      id: this.selectedProductId(),
  //      color: this.color()
  //   }),
  //   loader: ({request}) =>
  //         this.http.get<Product>(`${this.url}/${request.id}?color=${request.color}`)
  //  });
  product = resource({
    request: () => ({
       id: this.selectedProductId(),
       color: this.color()
    }),
    loader: ({request}) =>
      fetch(`${this.url}/${request.id}?color=${request.color}`).then(res => res.json() as Promise<Product>)
   });

  eff = effect(() => {
    console.log('Status:',ResourceStatus[this.product.status()])
    console.log('Value:', this.product.value())
   });

   Speeder(id: number) {
    this.selectedProductId.set(id);
   }

   Starfighter(id: number) {
    this.selectedProductId.set(id);
   }

   Update() {
    this.product.value.update(p => {
       if (p) {
        return {...p, cost_in_credits: 10000};
       }
       return undefined;
    });
   }
}

export interface Product {
  name: string;
  model: string;
  cost_in_credits: number;
}

export interface ProductResponse {
  count: number;
  next: string;
  previous: string;
  results: Product[]
}
