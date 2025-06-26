import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShareUiCardModule } from 'Shared-ui-Card'
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ShareUiCardModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Card';
  CardTitle : string = "features";
  CardBody : string = 'Special title treatment';
  CardFooter : string = '2 days ago'
  
}
