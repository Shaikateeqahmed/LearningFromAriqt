import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-card-title',
  templateUrl: './ui-card-title.component.html',
  styleUrl: './ui-card-title.component.css',
})
export class UiCardTitleComponent {
  @Input() title! : string;
}
