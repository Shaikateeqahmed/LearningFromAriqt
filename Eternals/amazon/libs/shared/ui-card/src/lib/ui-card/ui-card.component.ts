import { Component, inject, Input, OnInit } from '@angular/core';
import { CardConfig } from '../ui-card.config';
import { Router } from '@angular/router';

@Component({
  selector: 'amazon-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.css',
})
export class UiCardComponent implements OnInit {
  @Input() config?: CardConfig;
  @Input() ButtonConfig?: any;
  isDicounted?: boolean;
  #router = inject(Router);

  constructor() {
    this.detailProduct = this.detailProduct.bind(this);
  }

  ngOnInit(): void {
    if (this.config?.discount && this.config.price) {
      this.config.PriceClass = [
        ...(this.config.PriceClass || []),
        'text-decoration-line-through',
      ];
      this.isDicounted = true;
    }
    if (!this.config?.discount && this.config?.price) {
      this.config.PriceClass = [
        ...(this.config.PriceClass || []),
        'mt-5',
        'fw-medium',
      ];
    }
  }

  detailProduct() {
    console.log(this.config?.id);

    this.#router.navigate(['/product'], {
      queryParams: { productId: this.config?.id },
    });
  }
}
