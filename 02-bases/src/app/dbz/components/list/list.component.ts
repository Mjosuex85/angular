import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent{

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [];

  onDeletedCharacter(id?: string ):void {

    if(!id) return

    this.onDeleted.emit(id)
  }
}
