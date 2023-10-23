import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({ providedIn: 'root' })

export class GifService {

  public gifList: Gifs[] = []

  private _tagHistory:   string[] = [];
  private apiKey:        string = "4zA7gmkl0uGXZFWRuwuT8DggR5lDRkjE";
  private serviceUrl:     string = "http://api.giphy.com/v1/gifs/"

  constructor(private http: HttpClient) { }

  get tagsHistory(): string[] {
    return [...this._tagHistory];
  }


  private organizeHistory(tag: string) {
    tag = tag.toLowerCase()

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagHistory = this._tagHistory.splice(0, 10)

    this._tagHistory.unshift(tag)
  }


  searchTag(tag: string): void {

    if (tag.length === 0) return
    this.organizeHistory(tag)

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", tag)
      .set("limit", 10)

    this.http.get<SearchResponse>(`${this.serviceUrl}search?`, { params })
      .subscribe((res) => {
        this.gifList = res.data
      })
  }

  cleaHistory(): void {
    this._tagHistory = []
  }


}
