import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from '../../../models/Hotel';
import { HotelService } from '../../../services/hotel.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss'
})
export class HotelCardComponent {
  @Input() hotel: Hotel;
  @Output() deleteClicked: EventEmitter<Hotel> = new EventEmitter();
  apiUrl = environment.API_URL;

  constructor(private hotelService: HotelService) {}

  onClickDelete() {
    this.deleteClicked.emit(this.hotel);
  }
}
