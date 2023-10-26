import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: 'card.component.html'
})

export class GifCardComponent implements OnInit {

  @Input()
  public gif!: Gifs;

  constructor() { }

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif params is required')
  }

}
