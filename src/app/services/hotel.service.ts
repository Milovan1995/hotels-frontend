import { Injectable } from '@angular/core';
import { Hotel } from '../models/Hotel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}
  getAllHotels() {
    return this.http.get<Hotel[]>('http://localhost:3000/hotel');
  }
  getHotelById(id: number) {
    return this.http.get<Hotel>(`http://localhost:3000/hotel/${id}`);
  }
  insertHotel(hotel: Hotel) {
    return this.http.post<Hotel>('http://localhost:3000/hotel', hotel);
  }
  updateHotel(hotel: Hotel) {
    return this.http.put(`http://localhost:3000/hotel/${hotel.id}`, hotel);
  }
  deleteHotel(id: number) {
    return this.http.delete(`http://localhost:3000/hotel/${id}`);
  }
}
