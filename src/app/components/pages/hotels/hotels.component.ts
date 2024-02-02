import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/Hotel';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
})
export class HotelsComponent implements OnInit {
  loading = false;
  hotels: Hotel[] = [];
  constructor(private hotelService: HotelService) {}
  ngOnInit(): void {
    this.loading = true;
    this.hotelService.getAllHotels().subscribe((data) => {
      this.loading = false;
      return (this.hotels = data);
    });
    if (this.hotels.length < 1) {
      setTimeout(() => {
        if (this.hotels.length > 0) {
          return;
        } else {
          this.loading = false;
        }
      }, 200);
    }
  }
}
