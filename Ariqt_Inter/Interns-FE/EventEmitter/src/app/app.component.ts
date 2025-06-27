import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventEmitter';
  ngOnInit(){
    this.foo();
    this.Timer();
    this.bar();
  }
  foo(){
    console.log("First");
  }
  Timer(){
    setTimeout(()=>{
      console.log("Second");
    },3000)
  }
  bar(){
    console.log('Third');
  }
}
