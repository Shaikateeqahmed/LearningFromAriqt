import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigButtonComponent } from './config-button/config-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ConfigButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'config-based-components';
  handleButtonClick() {
    console.log('Button clicked!');
  }
}
