import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private apiURL = 'http://localhost:8080/usuarios'; // URL de la API

  // Propiedades para el nuevo producto
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellidos: '',
    correo: '',
    direccion: '',
    rol: 0,
    password: '',
  };

  constructor(private http: HttpClient) {}

  onClickAgregarUsuario() {
    // Realizar una solicitud POST con el objeto `product` al API
    this.http.post(this.apiURL, this.usuario).subscribe(
      () => {
        alert('Usuario registrado exitosamente');
        // Aquí puedes limpiar el formulario o mostrar un mensaje de éxito si es necesario
        this.usuario = {
          id: 0,
          nombre: '',
          apellidos: '',
          correo: '',
          direccion: '',
          rol: 0,
          password: '',
        };
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        alert('Error al registrar el usuario');
      }
    );
  }
}
