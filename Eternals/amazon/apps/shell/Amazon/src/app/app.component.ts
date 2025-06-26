import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiNavbarComponent } from "./ui-navbar/ui-navbar.component";
import { UiHomeComponent } from './ui-home/ui-home.component';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiNavbarComponent, UiHomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Amazon';
}
