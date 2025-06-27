import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-of-second',
  templateUrl: './child-of-second.component.html',
  styleUrls: ['./child-of-second.component.css']
})
export class ChildOfSecondComponent {
  @Input()
  messageForChildOfSecond!: number;
}
