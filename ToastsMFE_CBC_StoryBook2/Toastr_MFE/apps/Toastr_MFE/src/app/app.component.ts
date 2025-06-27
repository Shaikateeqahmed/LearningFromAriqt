import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiToastrModule } from 'ui-toastr'
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiToastrModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Toastr_MFE';
}
