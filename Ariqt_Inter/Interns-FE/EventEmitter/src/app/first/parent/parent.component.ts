import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageRecieve : any;
  fun(e : string){
      this.messageRecieve = e;
  }
}
