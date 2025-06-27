import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-of-third',
  templateUrl: './parent-of-third.component.html',
  styleUrls: ['./parent-of-third.component.css']
})
export class ParentOfThirdComponent {
  IncOfChildOfThirdModule : number = 0;
  msgFromChildOfThirdModule(e : number){
    this.IncOfChildOfThirdModule = e;
  }
  IncOfChildOfFourthModule : number = 0;
  msgFromChildOfFourthModule(e : number){
    this.IncOfChildOfFourthModule = e;
  }
}
