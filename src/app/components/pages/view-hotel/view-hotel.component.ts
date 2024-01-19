import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/Hotel';
import { HotelService } from '../../../services/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrl: './view-hotel.component.scss',
})
export class ViewHotelComponent implements OnInit {
  hotel: Hotel = new Hotel();
  apiUrl = environment.API_URL;

  constructor(
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((paramsData) => {
      let hotelID: number = paramsData[`id`];
      this.hotelService.getHotelById(hotelID).subscribe((data) => {
        console.log(data);
        this.hotel = data;
        this.hotelService
          .getHotelById(hotelID)
          .subscribe((data) => (this.hotel = data));
      });
    });
  }
}
