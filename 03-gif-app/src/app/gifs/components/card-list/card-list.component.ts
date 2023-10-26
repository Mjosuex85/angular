import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})

export class CardListComponent implements OnInit {

  @Input()
  public gifs: Gifs[] = []

  constructor() {}

  ngOnInit(): void {
    if (this.gifs) throw new Error("Gif property is required")
  }

}

