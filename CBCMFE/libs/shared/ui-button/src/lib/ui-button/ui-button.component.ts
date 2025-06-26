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
  selector: 'lib-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {
  @Input()
  config!: ButtonConfig;
 
  handleClick(): void {
    if (this.config.onClick) {
      this.config.onClick();
    }
  }
}
