import { Component } from '@angular/core';
import { User } from '../../../models/User';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: User = new User();
  constructor(private auth: AuthService) {}

  login() {
    if (!this.user.username || !this.user.password) {
      alert('Unesite sva polja');
      return;
    }

    this.auth.login(this.user).subscribe((data: any) => {
      if (data.success) {
        localStorage.setItem('hotels-token', data.token);
        window.location.href = '/';
      } else {
        alert('pogresni podaci');
      }
    });
  }
}
