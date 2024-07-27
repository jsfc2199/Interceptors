import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

//! Interceptores acorde a angular 18
//como función
export function userInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  console.log(req.url, 'desde la funcion');
  const headers = new HttpHeaders({
    'token-usuario': 'token-desde-la-función'
  })

  //clonar la ruta
  const reqClone = req.clone({
    headers
  })
  return next(reqClone);
}

//como const
export const userInt: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  console.log(req.url, 'desde const');

  const headers = new HttpHeaders({
    'token-usuario': 'token-desde-const'
  })

  //clonar la ruta
  const reqClone = req.clone({
    headers
  })
  return next(reqClone);
};
