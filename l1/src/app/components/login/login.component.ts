import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  findUser = {
    email: '',
    password: ''
  };

  @Output() loginedUser = new EventEmitter();

  constructor() { }

  logUser() {
    this.loginedUser.emit(this.findUser)
  }
}
