import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';
import { Hotel } from '../../../models/Hotel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-hotel',
  templateUrl: './add-edit-hotel.component.html',
  styleUrl: './add-edit-hotel.component.scss',
})
export class AddEditHotelComponent implements OnInit {
  constructor(
    private hotelService: HotelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  hotel: Hotel = new Hotel();
  edit: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramData) => {
      this.hotelService
        .getHotelById(paramData['id'])
        .subscribe((data) => (this.hotel = data));
    });
  }

  saveHotel() {
    if (this.edit) {
      this.hotelService.updateHotel(this.hotel).subscribe((data) => {
        this.router.navigateByUrl('/hotels');
      });
    } else {
      this.hotelService.insertHotel(this.hotel).subscribe((data) => {
        this.router.navigateByUrl('/hotels');
      });
    }
  }
}
