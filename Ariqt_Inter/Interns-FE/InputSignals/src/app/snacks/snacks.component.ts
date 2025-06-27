import { Component } from '@angular/core';
import { SnacksListComponent } from '../snacks-list/snacks-list.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from "../filter/filter.component";
@Component({
  selector: 'app-snacks',
  standalone: true,
  imports: [SnacksListComponent, FormsModule, FilterComponent],
  templateUrl: './snacks.component.html',
  styleUrl: './snacks.component.css'
})
export class SnacksComponent {
  public filterItems : string ="";
}
