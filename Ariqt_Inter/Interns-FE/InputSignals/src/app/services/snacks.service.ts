import { Injectable, signal } from '@angular/core';

interface SnackItem{
  name : string,
  price : number
};

@Injectable({
  providedIn: 'root'
})

export class SnacksService {
  snacksList = signal<SnackItem[]>([
    {name : "popcorn",
      price : 2
    },
    {name : "peanuts",
      price : 3
    },
    {name : "mixed nuts",
      price : 4
    },
    {name : "crackers",
      price : 5
    },
    {name : "ice Cream",
      price : 6
    },
    {name : "corn nuts",
      price : 7
    }
  ]);
}
