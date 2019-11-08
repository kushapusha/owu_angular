import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageReg: boolean;
  pageLog: boolean;
  show: boolean;
  showHousesRegForm: boolean;
  infoAboutLog: string;

  users = [
    {
      name: 'Vika',
      email: 'vika@dls.dls',
      password: 'wf1ef23',
      is_blocked: false
    },
    {
      name: 'Ira',
      email: 'ira@dls.dls',
      password: '293rujhf',
      is_blocked: true
    }
  ];

  houses = [
    {
      id: 1,
      city: 'Lviv',
      street: 'Korotka',
      price: 1000,
      user: this.users[0]
    },
    {
      id: 2,
      city: 'Kyiv',
      street: 'Shevchenka',
      price: 5000,
      user: this.users[1]
    }
  ];

  regForm() {
    this.pageReg = !this.pageReg;
    this.pageLog = false;
  }

  logForm() {
    this.pageLog = !this.pageLog;
    this.pageReg = false;
  }

  regUser(newUser) {
    this.users.push(newUser);
    console.log(this.users);
  }

  logUser(findUser) {
    const findedUser = this.users.find(user =>
      findUser.email === user.email &&
      findUser.password === user.password);
    findedUser ? this.infoAboutLog = 'Welcome' : this.infoAboutLog = 'User is not found'
  }

  showRegHousesForm() {
    this.showHousesRegForm = !this.showHousesRegForm
  }

  createNewHouse(newHouse) {
    this.houses.push({...newHouse,
      id: this.houses.length,
      user: this.users[Math.floor(Math.random() * this.users.length)]});
  }

  showHouses() {
    this.show = !this.show;
  }

}
