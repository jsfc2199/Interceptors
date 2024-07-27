import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  //! los interceptores son simplemente servicios, esto es como se hace en angular antes de 17
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('pasó por el interceptor')

    const headers = new HttpHeaders({
      'token-usuario': 'faiwueqtioiwerqb'
    })

    //clonamos la request
    const reqClone = req.clone({
      headers
    })

    return next
    .handle(reqClone)
    .pipe(
      catchError((error) => this.manejarError(error)) //interceptamos también todos los errores
    )
  }

  manejarError(error : HttpErrorResponse){
    console.log('sucedió un error');
    console.log('Registrado en el log File')
    console.warn(error)
    return throwError(() => 'Error personalizado')

  }
}
