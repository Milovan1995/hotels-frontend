import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('hotels-token');
  if (!token) return false;
  const tokenParts = token.split('.');
  const userDataPart = tokenParts[1];
  const user = JSON.parse(window.atob(userDataPart));
  return user.isAdmin;
};
