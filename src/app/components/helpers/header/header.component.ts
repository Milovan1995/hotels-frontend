import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isLoggedIn: boolean = this.auth.isLoggedIn();
  username = this.auth.isLoggedIn() ? this.auth.getUserData().username : '';
  constructor(private auth: AuthService) {}

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }
}
