import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-registration-house',
  templateUrl: './registration-house.component.html',
  styleUrls: ['./registration-house.component.css']
})
export class RegistrationHouseComponent {

  newHouse = {
    city: '',
    street: '',
    price: 0
  };

  @Output() addHouse = new EventEmitter();

  constructor() {
  }

  createNewHouse() {
    this.addHouse.emit(this.newHouse)
  }
}
