import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.css',
})
export class UiCardComponent {
  @Input() title! : any;
  @Input() body! : any;
  @Input() footer! : any;

  ngOnInit(){
    console.log(this.title)
  }
}
