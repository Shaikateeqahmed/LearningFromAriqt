import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiVCModule } from 'shared-ui-VC'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiVCModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Shell';
}
