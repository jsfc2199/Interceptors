import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  private http = inject(HttpClient)

  getUsuarios(){
    //forma tradicional de hacer peticiones
    //pero si queremos añadir parámetros, headers o algo más lo podemos añadir dentro del método
    //esto nos agrega a la url ?page=2
    const params = new HttpParams().append('page', '2')

    //otro ejemplo es enviar headers que normalmente los enviamos también en el cuerpo del get
    //! haremos que el interceptor se encargue de colocar el token
    // const headers = new HttpHeaders({
    //   'token-usuario': 'faiwueqtioiwerqb'
    // })

    return this.http.get('https://reqres.in/api/users', {
      params,
      // headers
    })
    .pipe(
      map((resp:any) => resp.data),
      catchError((error) => this.manejarError(error))
    )

    //!lo anterior funciona con normalidad, pero ¿qué pasa si a absolutamente todas las rutas queremos enviarle los headers como un token?
  }

  manejarError(error : HttpErrorResponse){
    console.log('sucedió un error');
    console.log('Registrado en el log File')
    console.warn(error)
    return throwError(() => 'Error personalizado')

  }
}

