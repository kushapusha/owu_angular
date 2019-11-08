import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-houses',
  templateUrl: './search-houses.component.html',
  styleUrls: ['./search-houses.component.css']
})
export class SearchHousesComponent {

  searchedHouses: object;
  inputValue: string;

  @Input() houses;

  constructor() { }

  OnInput(city) {
    this.inputValue = city.target.value;
  }

  OnClick() {
    this.searchedHouses = this.houses.filter(houses => houses.city === this.inputValue)
  }
}
