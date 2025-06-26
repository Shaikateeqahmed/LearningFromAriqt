import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiButtonComponent} from 'shared-ui-button'
import { UiButtonModule } from "../../../../libs/shared/ui-button/src/lib/ui-button.module";
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CBCMFE';
  handleButtonClick() {
    console.log('Button clicked!');
  }
}
