import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Iron Man';
  public age: number = 45;
  public displayName: boolean = true;
  public displayAge: boolean = true

  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'spiderman'
    this.displayName = false
  }

  changeAge():void {
    this.age = 23
    this.displayAge = false
  }

  reset() {
    this.name = 'Iron Man'
    this.age = 45
    this.displayAge = true;
    this.displayName = true;
  }

}
