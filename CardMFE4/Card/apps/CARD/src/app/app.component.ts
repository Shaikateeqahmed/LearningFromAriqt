import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiCardModule } from 'shared-ui-card'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiCardModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CARD';
}
