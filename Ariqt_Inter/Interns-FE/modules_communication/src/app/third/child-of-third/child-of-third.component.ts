import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-of-third',
  templateUrl: './child-of-third.component.html',
  styleUrls: ['./child-of-third.component.css']
})
export class ChildOfThirdComponent {

  @Output() childOfThirdModule = new EventEmitter<number>();

  number : number = 0;
  IncChild(){
    this.number++;
    this.childOfThirdModule.emit(this.number);
  }
}
