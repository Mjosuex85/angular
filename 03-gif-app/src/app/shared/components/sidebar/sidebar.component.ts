import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shered-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SideBarComponent {

  public gifHistory: string[] = []

  constructor(private gifservice: GifService) {}

  get tags(): string[] {
    this.gifHistory = [...this.gifservice.tagsHistory]
    return this.gifHistory
  }

  cleanHistory(): void {
    this.gifservice.cleaHistory()
  }

  searchByTagHistory(tag: string):void {
    this.gifservice.searchTag(tag)
  }

}
