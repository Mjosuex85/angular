import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})

export class AddCharacterComponent  {

  @Output("addCharacter")
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emmitCharacter(): void {

    if(this.character.name.length === 0) alert("Agrege un nombre")

    else {
      this.onNewCharacter.emit(this.character)
      alert(`Se agregró a ${this.character.name} a la lista`)
    }

    this.character = {name: '', power: 0}

  }

}
