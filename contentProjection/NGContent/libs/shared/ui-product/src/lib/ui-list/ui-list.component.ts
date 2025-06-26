import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrl: './ui-list.component.css',
})
export class UiListComponent {

  @Input() products! : any;
  @ContentChild('title') title! : ElementRef;
  ngAfterContentInit(){
    console.log(this.title.nativeElement.innerText)
  }
}
