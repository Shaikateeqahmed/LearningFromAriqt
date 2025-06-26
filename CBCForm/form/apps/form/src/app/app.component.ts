import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiButtonModule } from 'ui-button'
import { UiFormModule } from 'ui-form'
import { UiSpinnerModule} from 'ui-spinner'
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiButtonModule, UiFormModule, UiSpinnerModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'form';
handleButtonClick(){
};
}
