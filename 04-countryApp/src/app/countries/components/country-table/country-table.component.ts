import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = []

  constructor(private countryService: CountryService) {}

  countryById(id: string) {
    this.countryService.searchCountryById(id)
  }


}
