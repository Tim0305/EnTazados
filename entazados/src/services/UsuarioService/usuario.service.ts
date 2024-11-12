import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';

@Injectable({
   providedIn: 'root'
})
export class UsuarioService {
   private usuario: any;

   constructor() { }

   getUsuario() {
      return this.usuario;
   }

   setUsuario(newUsuario: Usuario){
      this.usuario = newUsuario;
   }
}
