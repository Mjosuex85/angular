import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifService {

  private _tagHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagHistory];
  }

  searchTag(tag: string): void {


    if(this._tagHistory.length > 11) {
      this._tagHistory.pop()
    }

    this._tagHistory.unshift( tag )
  }

  cleaHistory(): void {
    this._tagHistory = []
  }


}
