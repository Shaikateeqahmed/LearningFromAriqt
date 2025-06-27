import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiButtonModule } from 'ui-button'
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'button';
handleButtonClick: (() => void)|undefined;
}
