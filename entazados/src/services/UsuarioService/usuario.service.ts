import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuario: any;

  constructor(private http: HttpClient) {
    this.usuario = null;
  }

  getUsuario() {
    return this.usuario;
  }

  setUsuario(newUsuario: Usuario) {
    this.usuario = newUsuario;
  }

  getRol() {
    if (this.usuario == null) return 0;
    else return this.usuario.rol;
  }

  verificarRespuestaPregunta(
    correo: string,
    respuesta: string
  ): Promise<number> {
    const url = `http://localhost:8080/usuarios/verificar-pregunta?correo=${correo}&respuestaPregunta=${respuesta}`;
    return new Promise((resolve, reject) => {
      this.http.get<number>(url).subscribe(
        (response: number) => resolve(response), // Resuelve la promesa con el valor
        (error) => {
          alert('Error al verificar la respuesta de la pregunta.');
          console.log(error);
          reject(-1); // Rechaza la promesa con un valor de error
        }
      );
    });
  }

  actualizarPassword(idUsuario: number, newPassword: string) {
    const url = 'http://localhost:8080/usuarios/restablecer-password';
    this.http
      .put(url, { idUsuario: idUsuario, newPassword: newPassword })
      .subscribe(
        () => {
          alert('La contraseña se actualizo correctamente.');
          console.log('La contraseña se actualizo correctamente.');
        },
        (error) => {
          alert('Error al actualizar la contraseña.');
          console.log(error);
        }
      );
  }
}
