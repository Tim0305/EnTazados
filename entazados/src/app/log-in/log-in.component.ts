import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario.model';
import { UsuarioService } from '../../services/UsuarioService/usuario.service';

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

   private apiURL = 'http://localhost:8080/usuarios/login';

   nuevaPassword: string = ''; // Para la nueva contraseña
   respuestaCorrecta: boolean = false; // Estado para el contenido del modal

   constructor(
      private router: Router,
      private http: HttpClient,
      private usuarioService: UsuarioService
   ) { }

   //Fucion para abrir el modal (pop up)
   openModal() {
      const modal: any = document.getElementById('my_modal_1');
      if (modal) {
         modal.showModal();
      }
   }

   //Fucion para cerrar el modal (pop up)
   closeModal() {
      const modal: any = document.getElementById('my_modal_1');
      if (modal) {
         modal.close();
      }
   }

   //Funcion para revisar que el correo y la respuesta coincidan (sin consultar a la api)
   checkAnswer() {
      // Simulacion de la  verificaciion de los datos
      const correoCorrecto = "ejemplo@gmail.com";
      const respuestaCorrecta = "perro panzon";

      if (
         this.datosInicioSesion.correo === correoCorrecto &&
         this.datosInicioSesion.respuesta_pregunta.toLowerCase() === respuestaCorrecta.toLowerCase()
      ) {
         this.respuestaCorrecta = true;
      } else {
         alert('Respuesta incorrecta.');
         this.respuestaCorrecta = false;
      }
   }

   //Actualizar la contraseña (no hace nada kakakjakj)
   updatePassword() {
      if (!this.nuevaPassword) {
         alert('Por favor, ingresa una nueva contraseña.');
         return;
      }
      alert('Contraseña actualizada exitosamente.');
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
