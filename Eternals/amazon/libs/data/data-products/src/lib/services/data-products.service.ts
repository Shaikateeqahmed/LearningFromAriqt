import { Injectable } from '@angular/core';
import { IProducts } from '../../models/products.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  constructor() {}

   products: IProducts[] = [
   
  
    {
      id: 1,
      image: 'https://example.com/images/nike-zoomx-vaporfly.jpg',
      title: 'Nike ZoomX Vaporfly',
      desc: 'Comfortable running shoes',
      price: 209.09,
      category: 'Fashion'
    },
    {
      id: 2,
      image: 'https://example.com/images/adidas-ultraboost.jpg',
      title: 'Adidas Ultraboost',
      desc: 'High-performance running shoes',
      price: 180.00,
      category: 'Fashion'
    },
    {
      id: 3,
      image: 'https://example.com/images/reebok-classic.jpg',
      title: 'Reebok Classic Leather',
      desc: 'Timeless leather sneakers',
      price: 130.00,
      category: 'Fashion'
    },
    {
      id: 4,
      image: 'https://example.com/images/puma-suede.jpg',
      title: 'Puma Suede Classic',
      desc: 'Stylish suede sneakers',
      price: 110.00,
      category: 'Fashion'
    },
    {
      id: 5,
      image: 'https://example.com/images/converse-chuck-taylor.jpg',
      title: 'Converse Chuck Taylor',
      desc: 'Iconic canvas sneakers',
      price: 75.00,
      category: 'Fashion'
    },
    {
      id: 6,
      image: 'https://example.com/images/michael-kors-bag.jpg',
      title: 'Michael Kors Handbag',
      desc: 'Elegant leather handbag',
      price: 295.00,
      category: 'Fashion'
    },
    {
      id: 7,
      image: 'https://example.com/images/rayban-sunglasses.jpg',
      title: 'Ray-Ban Sunglasses',
      desc: 'Classic aviator sunglasses',
      price: 150.00,
      category: 'Fashion'
    },
    {
      id: 8,
      image: 'https://example.com/images/gucci-belt.jpg',
      title: 'Gucci Belt',
      desc: 'Luxury leather belt',
      price: 450.00,
      category: 'Fashion'
    },
    {
      id: 9,
      image: 'https://example.com/images/prada-wallet.jpg',
      title: 'Prada Wallet',
      desc: 'High-end leather wallet',
      price: 320.00,
      category: 'Fashion'
    },
    {
      id: 10,
      image: 'https://example.com/images/burberry-scarf.jpg',
      title: 'Burberry Scarf',
      desc: 'Warm and stylish scarf',
      price: 200.00,
      category: 'Fashion'
    },

    // Electronics products
    {
      id: 11,
      image: 'https://example.com/images/iphone-14.jpg',
      title: 'iPhone 14',
      desc: 'Latest Apple smartphone with advanced features',
      price: 999.99,
      category: 'Electronics'
    },
    {
      id: 12,
      image: 'https://example.com/images/samsung-galaxy-s23.jpg',
      title: 'Samsung Galaxy S23',
      desc: 'High-end Android smartphone',
      price: 899.99,
      category: 'Electronics'
    },
    {
      id: 13,
      image: 'https://example.com/images/sony-wh-1000xm4.jpg',
      title: 'Sony WH-1000XM4',
      desc: 'Noise-cancelling wireless headphones',
      price: 349.99,
      category: 'Electronics'
    },
    {
      id: 14,
      image: 'https://example.com/images/apple-watch-series-8.jpg',
      title: 'Apple Watch Series 8',
      desc: 'Advanced smart watch with health features',
      price: 399.99,
      category: 'Electronics'
    },
    {
      id: 15,
      image: 'https://example.com/images/macbook-air.jpg',
      title: 'MacBook Air M2',
      desc: 'Lightweight laptop with powerful performance',
      price: 1199.99,
      category: 'Electronics'
    },
    {
      id: 16,
      image: 'https://example.com/images/dell-xps-13.jpg',
      title: 'Dell XPS 13',
      desc: 'Premium ultrabook with high-resolution display',
      price: 1299.99,
      category: 'Electronics'
    },
    {
      id: 17,
      image: 'https://example.com/images/bose-soundlink.jpg',
      title: 'Bose SoundLink',
      desc: 'Portable Bluetooth speaker with great sound',
      price: 229.99,
      category: 'Electronics'
    },
    {
      id: 18,
      image: 'https://example.com/images/nikon-d850.jpg',
      title: 'Nikon D850',
      desc: 'Full-frame DSLR camera',
      price: 2799.99,
      category: 'Electronics'
    },
    {
      id: 19,
      image: 'https://example.com/images/amazon-fire-tv.jpg',
      title: 'Amazon Fire TV Stick',
      desc: 'Streaming media player with 4K support',
      price: 49.99,
      category: 'Electronics'
    },
    {
      id: 20,
      image: 'https://example.com/images/fitbit-charge-5.jpg',
      title: 'Fitbit Charge 5',
      desc: 'Advanced fitness tracker with health insights',
      price: 149.99,
      category: 'Electronics'
    }, {
      id: 21,
      image: 'https://example.com/images/nike-zoomx-vaporfly.jpg',
      title: 'Nike ZoomX Vaporfly',
      desc: 'Comfortable running shoes',
      price: 209.09,
      category: 'Fashion'
    },
    {
      id: 22,
      image: 'https://example.com/images/adidas-ultraboost.jpg',
      title: 'Adidas Ultraboost',
      desc: 'High-performance running shoes',
      price: 180.00,
      category: 'Fashion'
    },

    // Electronics products
    {
      id: 23,
      image: 'https://example.com/images/iphone-14.jpg',
      title: 'iPhone 14',
      desc: 'Latest Apple smartphone with advanced features',
      price: 999.99,
      category: 'Electronics'
    },
    {
      id: 24,
      image: 'https://example.com/images/samsung-galaxy-s23.jpg',
      title: 'Samsung Galaxy S23',
      desc: 'High-end Android smartphone',
      price: 899.99,
      category: 'Electronics'
    },
  ];
  
  loadProducts(): Observable<IProducts[]> {
    return of(this.products);
  }
  }


