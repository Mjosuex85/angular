import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) {}

  serchCountry(country: string) {
    this.countryService.searchCountry(country)
      .subscribe((res) => {
        this.countries = res;
      })
  }


}
