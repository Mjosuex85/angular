import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public countriesList: Country[] = [];

  constructor(private http: HttpClient) { }

  // By Capital

  searchCapital(capital: string): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.apiUrl}/capital/${capital}`)
      .pipe(
        catchError( () => of([]))
      )
  }

  // By Region

  searchRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(
        catchError(() => of([]))
      )
  }

  // By Country

  searchCountry(country: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${country}`)
    .pipe(
      catchError(() => of([]))
    )
  }

  // By Aplha Code

  searchByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map( country => country.length > 0 ? country[0] : null),
        catchError(()=> of(null))
      )
  }

  // By Id

  searchCountryById(id: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${id}`)
      .pipe(
        catchError(()=> of([]))
      )
  }

}
