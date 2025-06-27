import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUnitTest';
  count : number = 10;
  ShowMessage(msg:string) : string{
    return msg; 
  }
  IncreaseCount(num : number){
    this.count+=num;
    console.log("Increase",this.count);
    return this.count;
  }
  DecreaseCount(num : number){
    this.count-=num;
    console.log("Decrease",this.count);
    return this.count;
  }
}
