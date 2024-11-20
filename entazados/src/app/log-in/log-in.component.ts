import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario.model';
import { UsuarioService } from '../../services/UsuarioService/usuario.service';
import { PasswordService } from '../../services/PasswordService/password.service';

@Component({
   selector: 'app-log-in',
   standalone: true,
   imports: [CommonModule, FormsModule],
   templateUrl: './log-in.component.html',
   styleUrl: './log-in.component.css',
})
export class LogInComponent {
   datosInicioSesion: any = {
      correo: '',
      password: '',
   };

   datosVerificacion: any = {
      correo: '',
      password: '',
   };

   private apiURL = 'http://localhost:8080/usuarios/login';

   newPassword: string = ''; // Para la nueva contraseña
   copyNewPassword: string = '';
   respuestaCorrecta: boolean = false; // Estado para el contenido del modal
   idUsuario: number = -1;

   constructor(
      private router: Router,
      private http: HttpClient,
      private usuarioService: UsuarioService,
      private passwordService: PasswordService
   ) { }

   openModal() {
      const modal: any = document.getElementById('my_modal_1');
      if (modal) {
         modal.showModal();
      }
   }

   closeModal() {
      const modal: any = document.getElementById('my_modal_1');
      if (modal) {
         modal.close();
      }
      this.respuestaCorrecta = false;
      this.datosVerificacion = {
         correo: '',
         password: '',
      };
   }

   //Funcion para revisar que el correo y la respuesta coincidan
   async checkAnswer() {
      this.idUsuario = await this.usuarioService.verificarRespuestaPregunta(
         this.datosVerificacion.correo,
         this.datosVerificacion.password
      );

      if (this.idUsuario == -1) {
         this.respuestaCorrecta = false;
         alert('Correo y/o nombre de mascota incorrectos.');
      } else this.respuestaCorrecta = true;
   }

   //Actualizar la contraseña
   updatePassword() {
      if (!this.newPassword) {
         alert('Por favor, ingresa una nueva contraseña.');
         return;
      }
      if (this.newPassword != this.copyNewPassword) {
         alert('Las contraseñas no coinciden.');
         return;
      }
      if (!this.passwordService.validarPassword(this.newPassword)) {
         alert('Contraseña invalida');
         return;
      }

      this.usuarioService.actualizarPassword(this.idUsuario, this.newPassword);
      this.closeModal();
   }

   onClickLogIn() {
      if (!this.datosInicioSesion.correo || !this.datosInicioSesion.password) {
         alert('Por favor, completa todos los campos.');
         return;
      }
      this.http.post(this.apiURL, this.datosInicioSesion).subscribe(
         (registeredUser: any) => {
            alert('Hola, ' + registeredUser.nombre);
            const user: Usuario = {
               id: registeredUser.id,
               nombre: registeredUser.nombre,
               apellidos: registeredUser.apellidos,
               correo: registeredUser.correo,
               direccion: registeredUser.direccion,
               rol: registeredUser.rol,
               password: '',
               respuestaPregunta: '',
            };

            this.usuarioService.setUsuario(user);

            this.router.navigate(['/catalogo']);
         },
         (error) => {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión');
         }
      );

      this.datosInicioSesion = {
         correo: '',
         password: '',
      };
   }

   onClickRegistrar() {
      this.router.navigate(['/sign-up']);
   }
}
