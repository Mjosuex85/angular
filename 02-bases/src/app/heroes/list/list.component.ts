import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spidernman', "Ironman", "Hulk", "She Hulk", "Thor"]
  public deletedHereo?: string = ""

  lastOut(): void {
    this.deletedHereo = this.heroNames.pop();
  }


}
