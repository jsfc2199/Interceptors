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
    .subscribe({
      next: (resp) => console.log(resp),
      error: (err) => console.log('error en app component')
    })
  }
}
