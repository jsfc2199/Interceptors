import { Component, inject } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private usuarioService = inject(UsuariosService)

  constructor(){
    this.usuarioService.getUsuarios()
    .subscribe(resp => {
      console.log(resp)
    })
  }
}
