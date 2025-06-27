import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-of-first',
  templateUrl: './parent-of-first.component.html',
  styleUrls: ['./parent-of-first.component.css']
})
export class ParentOfFirstComponent {
  incchild1 : number = 0
  child1(){
     this.incchild1++;
     console.log(this.incchild1)
  }

  incchild2 : number = 0
  child2(){
     this.incchild2++;
     console.log(this.incchild2)
  }
}
