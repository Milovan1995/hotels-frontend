import { Injectable } from '@angular/core';
import { Hotel } from '../models/Hotel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAllHotels() {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotel`);
  }

  getHotelById(id: number) {
    return this.http.get<Hotel>(`${this.apiUrl}/hotel/${id}`);
  }

  insertHotel(hotel: Hotel) {
    return this.http.post<Hotel>(`${this.apiUrl}/hotel`, hotel);
  }

  updateHotel(hotel: Hotel) {
    return this.http.put(`${this.apiUrl}/hotel/${hotel.id}`, hotel);
  }

  deleteHotel(id: number) {
    return this.http.delete(`${this.apiUrl}/hotel/${id}`);
  }

  addImage(formData: FormData) {
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }
}
