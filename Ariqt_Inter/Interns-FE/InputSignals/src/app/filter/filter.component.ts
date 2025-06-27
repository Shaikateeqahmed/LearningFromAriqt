import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  filter = model('')
  // @Input() filter = '';
  // @Output() filterChange = new EventEmitter<string>();
  // valueChanges(){
  //   this.filterChange.emit(this.filter)
  // }
}
