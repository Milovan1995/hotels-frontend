import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('hotels-token');
  req = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
  return next(req);
};
