import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './shared-search-box.component.html',
  styleUrls: ['./shared-search-box.component.scss']
})

export class SharedSearchBoxComponent {

  public placeholder: string = 'Search...';

  @Output()
  public onValue = new EventEmitter<string>();

  emitSearchValue( value: string ): void {
    this.onValue.emit(value)
  }

}
