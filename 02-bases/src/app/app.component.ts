import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}
