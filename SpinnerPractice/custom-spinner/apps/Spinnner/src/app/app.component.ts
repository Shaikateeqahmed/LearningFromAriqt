import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SpinnerSize, SpinnerType, UiSpinnerModule } from 'component-base-ui-spinner'
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiSpinnerModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Spinnner';
  spinnerSize : SpinnerSize = SpinnerSize.Small
  spinnerType : SpinnerType = SpinnerType.Primary
}
