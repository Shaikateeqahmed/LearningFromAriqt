import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonModule } from 'component-base-ui-button'
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-ui-navbar',
  standalone: true,
  imports: [CommonModule, UiButtonModule, RouterModule],
  templateUrl: './ui-navbar.component.html',
  styleUrl: './ui-navbar.component.css',
})

export class UiNavbarComponent {
  constructor(private router: Router) {
    this.HandleCart = this.HandleCart.bind(this)
   }
  FirstChar: string = ""
  state: any = true;
  name: any;
  HandleProducts() {
    this.router.navigate(['/products']);
  };
  HandleCart() {
    this.router.navigate(['/cart']);
  };
  HandleLogout() {
    console.log('logout function')
  }
}

