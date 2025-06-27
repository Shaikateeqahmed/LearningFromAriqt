import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-of-fourth',
  templateUrl: './child-of-fourth.component.html',
  styleUrls: ['./child-of-fourth.component.css']
})
export class ChildOfFourthComponent {
  @Output() childOfFourthModule = new EventEmitter<number>();

  number : number = 0;
  IncChild(){
    this.number++;
    this.childOfFourthModule.emit(this.number);
  }
}
