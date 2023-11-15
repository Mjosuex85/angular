import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent {

  public countries: Country[] = []

  constructor(
    private countryService: CountryService
  ) {}

  searchByCapital(term: string) {
    this.countryService.searchCapital(term)
    .subscribe((countries) => {
      this.countries = countries;
    })
  }

}
