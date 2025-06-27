import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-of-other-module',
  templateUrl: './parent-of-other-module.component.html',
  styleUrls: ['./parent-of-other-module.component.css']
})
export class ParentOfOtherModuleComponent {
  messageRecieve : any;
  fun(e : string){
      this.messageRecieve = e;
  }
}
