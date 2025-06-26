import { Component, Input } from '@angular/core';

@Component({
  selector: 'amazon-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrl: './ui-list.component.css',
})
export class UiListComponent {
  @Input() products: any;
}
