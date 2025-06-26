import { Component, ElementRef, ViewChild } from '@angular/core';
import { UiChildComponent } from '../ui-child/ui-child.component';

@Component({
  selector: 'lib-ui-vc',
  templateUrl: './ui-vc.component.html',
  styleUrl: './ui-vc.component.css',
})
export class UiVCComponent {

  @ViewChild('header')
  header!: ElementRef;
  @ViewChild('child') Child? : UiChildComponent;

  ngAfterViewInit() {
    console.log(this.header.nativeElement.innerText);
    console.log(this.Child?.Counter);
  }

  Inc() {
    this.Child?.Increment();
  }
  Dec() {
    this.Child?.Decrement();
  }
}
