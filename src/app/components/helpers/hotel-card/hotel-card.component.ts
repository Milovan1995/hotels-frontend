import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from '../../../models/Hotel';
import { HotelService } from '../../../services/hotel.service';
import { environment } from '../../../../environments/environment.development';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss'
})
export class HotelCardComponent {
  @Input() hotel: Hotel;
  @Output() deleteClicked: EventEmitter<Hotel> = new EventEmitter();
  apiUrl = environment.API_URL;

  constructor(
    private hotelService: HotelService,
    private authService: AuthService
  ) {}

  userIsAdmin: boolean = this.authService.getUserData().isAdmin;
  onClickDelete() {
    this.deleteClicked.emit(this.hotel);
  }
}
