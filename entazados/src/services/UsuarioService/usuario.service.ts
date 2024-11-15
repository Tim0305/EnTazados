import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuario: any;
  private rol: number = 0; //0 = no logeado, 1 = administrador, 2 = usuario normal

  constructor() {}

  getUsuario() {
    return this.usuario;
  }

  setUsuario(newUsuario: Usuario) {
    this.usuario = newUsuario;
    this.rol = newUsuario.rol;
  }

  getRol() {
    return this.rol;
  }
}
