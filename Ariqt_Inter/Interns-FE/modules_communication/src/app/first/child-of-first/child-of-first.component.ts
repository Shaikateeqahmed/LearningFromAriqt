import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-of-first',
  templateUrl: './child-of-first.component.html',
  styleUrls: ['./child-of-first.component.css']
})
export class ChildOfFirstComponent {
  @Input()
  messageForChildOfFirst!: number;
}
