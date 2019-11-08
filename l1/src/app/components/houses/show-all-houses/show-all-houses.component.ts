import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-all-houses',
  templateUrl: './show-all-houses.component.html',
  styleUrls: ['./show-all-houses.component.css']
})
export class ShowAllHousesComponent {

  shortInfo: boolean = true;
  fullInfo: boolean;
  showedHouseId = -1;

  @Input() houses;

  constructor() {
  }

  showFullInfo(id: number) {
    this.showedHouseId = id;
    this.fullInfo = !this.fullInfo;
  }
}
