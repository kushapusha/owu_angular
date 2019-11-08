import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  newUser = {
    name: '',
    email: '',
    password: '',
    is_blocked: Boolean(Math.floor(Math.random() * 2))
  };

  @Output() registUser = new EventEmitter();

  constructor() {
  }

  regUser() {
    this.registUser.emit(this.newUser)
  }
}
