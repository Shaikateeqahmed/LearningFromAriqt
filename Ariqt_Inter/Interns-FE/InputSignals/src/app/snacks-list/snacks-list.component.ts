import { Component, computed, inject, input, Input } from '@angular/core';
import { SnacksService } from '../services/snacks.service';
@Component({
  selector: 'app-snacks-list',
  standalone: true,
  imports: [],
  templateUrl: './snacks-list.component.html',
  styleUrl: './snacks-list.component.css'
})
export class SnacksListComponent {

  filteredItems = input('',{
    transform : (value : string) => value.toLocaleLowerCase()
  });

   #snackService = inject(SnacksService);
   public snackList = this.#snackService.snacksList;


   public filteredSnacks = computed(()=>
    this.snackList().filter(s => s.name.includes(this.filteredItems()))
   )

   constructor(){
    console.log(this.snackList());
    console.log(this.filteredSnacks())
   }

}
