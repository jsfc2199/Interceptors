import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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
    const headers = new HttpHeaders({
      'token-usuario': 'faiwueqtioiwerqb'
    })

    return this.http.get('https://reqres.in/api/users', {
      params,
      headers
    })

    //!lo anterior funciona con normalidad, pero ¿qué pasa si a absolutamente todas las rutas queremos enviarle los headers como un token?
  }
}

