import { Component } from '@angular/core';

@Component({
  selector: 'lib-ui-child',
  templateUrl: './ui-child.component.html',
  styleUrl: './ui-child.component.css',
})
export class UiChildComponent {

  Counter : number = 0;

  Increment(){
    this.Counter++;
  }

  Decrement(){
    this.Counter--;
  }
}
