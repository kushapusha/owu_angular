import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue: string;
  pageReg: boolean;
  pageLog: boolean;
  show: boolean;
  shortInfo: boolean = true;
  fullInfo: boolean;
  showHousesRegForm: boolean;
  searchedHouses;
  infoAboutLog: string;

  newUser = {
    name: '',
    email: '',
    password: '',
    is_blocked: Boolean(Math.floor(Math.random() * 2))
  };

  findUser = {
    email: '',
    password: ''
  };

  users = [
    {
      name: 'Vika',
      email: 'vika@dls.dls',
      password: 'wf1ef23',
      is_blocked: Boolean(Math.floor(Math.random() * 2))
    },
    {
      name: 'Ira',
      email: 'ira@dls.dls',
      password: '293rujhf',
      is_blocked: Boolean(Math.floor(Math.random() * 2))
    }
  ];

  newHouse = {
    city: '',
    street: '',
    price: 0,
    user: this.users[Math.floor(Math.random() * this.users.length)]
  };

  houses = [
    {
      city: 'Lviv',
      street: 'Korotka',
      price: 1000,
      user: this.users[Math.floor(Math.random() * this.users.length)]
    },
    {
      city: 'Kyiv',
      street: 'Shevchenka',
      price: 5000,
      user: this.users[Math.floor(Math.random() * this.users.length)]
    }
  ];

  OnClick() {
    this.searchedHouses = this.houses.filter(houses => houses.city === this.inputValue)
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

  regUser() {
    this.users.push(this.newUser);
    console.log(this.users);
  }

  logUser() {
    const findedUser = this.users.find(user =>
      this.findUser.email === user.email &&
      this.findUser.password === user.password);
    findedUser ? this.infoAboutLog = 'Welcome' : this.infoAboutLog = 'User is not found'
  }

  showRegHousesForm() {
    this.showHousesRegForm = !this.showHousesRegForm
  }

  createNewHouse() {
    this.houses.push(this.newHouse);
  }

  showHouses() {
    this.show = !this.show;
  }

  showFullInfo() {
    this.fullInfo = !this.fullInfo;
    this.shortInfo = !this.shortInfo
  }
}
