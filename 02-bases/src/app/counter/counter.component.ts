import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

<h3>Counter: {{counter}}</h3>

<button (click)="increaseBy('decrement')" [disabled]="disabled"> -1 </button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy('increment')"> +1 </button>
`
})

export class CounterComponent implements OnInit {
  constructor() {}

  public title: string = 'Bases';
  public counter: number = 0;
  public disabled: boolean = true

  // TODO: CREAR LOGICA
  increaseBy(value: string): void {

    this.counter == 1 ? this.disabled = true : this.disabled = false;

    switch (value) {
      case 'increment':
        this.counter += 1
        break;
      case 'decrement':
        this.counter += -1
        break;
      default:
        break;
    }

  }

  reset(): void {
    this.counter = 0;
    console.log(this.counter)
  }

  ngOnInit() { }
}
