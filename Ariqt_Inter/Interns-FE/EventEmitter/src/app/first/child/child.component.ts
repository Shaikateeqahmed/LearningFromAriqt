import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() Send = new EventEmitter<string>()

  btnClick(){
     this.Send.emit("Hi From Child Component!");
  }
}
