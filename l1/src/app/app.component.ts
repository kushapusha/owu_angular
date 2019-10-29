import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue: string = '';
  pageReg: boolean;
  pageLog: boolean;
  show: boolean;
  searchedHouses;
  houses = [
    {
      city: 'Lviv',
      street: 'Korotka',
      rooms: 3,
      price: 1000
    },
    {
      city: 'Kyiv',
      street: 'Shevchenka',
      rooms: 1,
      price: 5000
    },
    {
      city: 'Odesa',
      street: 'Malynova',
      rooms: 2,
      price: 3000
    },
    {
      city: 'Uzhhorod',
      street: 'Sirka',
      rooms: 2,
      price: 1000
    }
  ];

  OnClick() {
    this.searchedHouses = this.houses.filter(houses => {
      return houses.city === this.inputValue
    })
  }

  OnInput(event) {
    this.inputValue = event.target.value;
  }

  regForm() {
    this.pageReg = !this.pageReg;
    this.pageLog = false;
  }

  logForm() {
    this.pageLog = !this.pageLog;
    this.pageReg = false;
  }

  showHouses() {
    this.show = !this.show;
  }
}
