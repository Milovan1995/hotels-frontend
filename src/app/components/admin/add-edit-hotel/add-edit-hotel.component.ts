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
  file: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramData) => {
      if (paramData['id']) {
        this.edit = true;
        this.hotelService
          .getHotelById(paramData['id'])
          .subscribe((data) => (this.hotel = data));
      }
    });
  }

  saveHotel() {
    if (this.edit) {
      this.hotelService.updateHotel(this.hotel).subscribe((data) => {
        this.router.navigateByUrl('/hotels');
      });
    } else {
      let formData: FormData = new FormData();
      formData.append('img', this.file);
      this.hotelService.addImage(formData).subscribe({
        next: (fileUploadResponse: any) => {
          this.hotel.image_path = fileUploadResponse.filename;
        },
        complete: () => {
          this.hotelService.insertHotel(this.hotel).subscribe((data) => {
            this.router.navigateByUrl('/hotels');
          });
        },
      });
    }
  }
  setUploadedFile(e: any) {
    this.file = e.target.files[0];
    console.log(this.file);
  }
}
