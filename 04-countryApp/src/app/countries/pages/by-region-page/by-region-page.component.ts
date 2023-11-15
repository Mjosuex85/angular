import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = []

  constructor(
    private countryService: CountryService
  ) {}


  searchByRegion(region: string) {
    this.countryService.searchRegion(region)
      .subscribe((res) => {
        this.countries = res
      })
  }

}
