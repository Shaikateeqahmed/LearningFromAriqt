import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ButtonConfig {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  styles?: { [key: string]: string };
  classes?: string[];
  icon?: string;
  onClick?: () => void;
}

@Component({
  selector: 'app-config-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config-button.component.html',
  styleUrl: './config-button.component.css'
})
export class ConfigButtonComponent {
  @Input()
  config!: ButtonConfig;
 
  handleClick(): void {
    if (this.config.onClick) {
      this.config.onClick();
    }
  }
}
