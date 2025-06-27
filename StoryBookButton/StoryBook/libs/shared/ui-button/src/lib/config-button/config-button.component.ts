import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-config-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config-button.component.html',
  styleUrl: './config-button.component.css',
})
export class ConfigButtonComponent {
  @Input() buttonType: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;

  onClick(event: Event): void {
    // Add custom logic if needed
  }
}
