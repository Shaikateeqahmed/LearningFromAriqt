import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-toast',
  templateUrl: './ui-toast.component.html',
  styleUrl: './ui-toast.component.css',
})
export class UiToastComponent {

  
  @Input() title? : string;
  @Input() message? : string;
  @Input() show: boolean = false;

  ngOnInit(): void {
    console.log(this.title)
    if (this.show) {
      setTimeout(() => this.hide(), 5000); // Auto-hide after 5 seconds
    }
  }

  ngAfterInit(){
       console.log(this.show)
  }

  hide() {
    this.show = false;
  }
}
