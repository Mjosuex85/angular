import { Component } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(
    private gifService: GifService
  ) {}

  get gifsList(): Gifs[] {
    return [...this.gifService.gifList]
  }


}
