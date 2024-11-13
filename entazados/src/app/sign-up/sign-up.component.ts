import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
   private apiURL = 'http://localhost:8080/usuarios'; // URL de la API

   // Propiedades para el nuevo producto
   usuarios: any = {
      nombre: '',
      apellidos: '',
      correo: '',
      direccion: '',
      password: ''
   };

   constructor(private http: HttpClient) {}

   onClickAgregarUsuario() {
      console.log('Datos enviados:', this.usuarios);
      this.http.post(this.apiURL, this.usuarios).subscribe(
         () => {
            alert('Usuario registrado exitosamente');
            // Aquí puedes limpiar el formulario o mostrar un mensaje de éxito si es necesario
            this.usuarios = {
               nombre: '',
               apellidos: '',
               correo: '',
               direccion: '',
               rol: 0,
            };
         },
         (error) => {
            console.error('Error al registrar el usuario:', error);
            alert("Error al registrar el usuario");
         }
      );
   }
}

