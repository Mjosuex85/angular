import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent {

  public forbidden: string = ''

  @ViewChild("textTagInnput")
  public tag!: ElementRef<HTMLInputElement>;

  constructor( private gifService: GifService ) { }

  searchTag(): void {
    const newTag: string = this.tag.nativeElement.value;

    this.gifService.searchTag(newTag)

    this.tag.nativeElement.value = ''

  }

}
