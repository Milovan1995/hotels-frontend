import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: User) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
  isLoggedIn() {
    const token = localStorage.getItem('hotels-token');
    return !!token;
  }
  getUserData() {
    const token = localStorage.getItem('hotels-token');
    if (!token) return null;
    const tokenParts = token.split('.');
    const userDatapart = tokenParts[1];
    const user = JSON.parse(window.atob(userDatapart));
    return user;
  }
}
