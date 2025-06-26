import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiCartComponent } from './ui-cart/ui-cart.component';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiCartComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Cart';
}
