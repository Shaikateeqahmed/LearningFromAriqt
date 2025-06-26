import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiDropdownModule } from 'ui-dropdown'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiDropdownModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DropDown';
}
