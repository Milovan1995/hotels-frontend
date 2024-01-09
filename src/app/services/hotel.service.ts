import { Injectable } from '@angular/core';
import { Hotel } from '../models/Hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor() {}
  getAllHotels(): Hotel[] {
    return [
      {
        id: 2,
        name: 'Hotel B',
        description: 'Crazy good Hotel',
        yearOfStart: 2020,
        noOfStars: 5,
        updated: new Date(),
        created: new Date(),
      },
    ];
  }
}
