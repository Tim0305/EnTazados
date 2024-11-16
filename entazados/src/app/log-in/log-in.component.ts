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
   }

   checkAnswer() {
      // Simular verificación de respuesta
      const correoCorrecto = "ejemplo@gmail.com";
      const respuestaCorrecta = "perro panzon";

      if (
         this.datosInicioSesion.correo === correoCorrecto &&
         this.datosInicioSesion.respuesta_pregunta.toLowerCase() === respuestaCorrecta.toLowerCase()
      ) {
         this.respuestaCorrecta = true; // Cambia al estado de nueva contraseña
      } else {
         alert('Respuesta incorrecta.');
         this.respuestaCorrecta = false;
      }
   }

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
      // Realizar una solicitud POST con el objeto `product` al API
      this.http.post(this.apiURL, this.datosInicioSesion).subscribe(
         (registeredUser: any) => {
            alert('Hola, ' + registeredUser.nombre);
            // Almacenar la info del usuario sin la contrasenia
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

      // Aquí puedes limpiar el formulario o mostrar un mensaje de éxito si es necesario
      this.datosInicioSesion = {
         correo: '',
         password: '',
      };
   }

   onClickRegistrar() {
      this.router.navigate(['/sign-up']);
   }
}
