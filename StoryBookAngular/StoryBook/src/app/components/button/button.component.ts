import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ButtonConfig {
  label: string;
  style?: string;
  disabled?: boolean;
  onClick?: (event: Event) => void;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  config?: ButtonConfig;

}
