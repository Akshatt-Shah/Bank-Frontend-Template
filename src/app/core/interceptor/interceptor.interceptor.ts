import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('bankusertoken') || '';
    const newrequest = request.clone({
      setHeaders: {
        authorization: token,
      },
    });
    // console.log(newrequest)
    return next.handle(newrequest);
  }
}


export const interceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorInterceptor,
  multi: true,
}