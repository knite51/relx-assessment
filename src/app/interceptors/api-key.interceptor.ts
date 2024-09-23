import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers.set(
        'x-api-key',
        'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'
      ),
    });
    return next.handle(request);
  }
}

// import { HttpInterceptorFn } from '@angular/common/http';

// export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
//   const newReq = req.clone({
//     setHeaders: {
//       Authorization: `Bearer PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf`,
//     },
//   });

//   return next(newReq);
// };
