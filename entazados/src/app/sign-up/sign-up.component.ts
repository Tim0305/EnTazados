import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/UsuarioService/usuario.service';
import { Router } from '@angular/router';

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

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  onClickAgregarUsuario() {
    // Realizar una solicitud POST con el objeto `product` al API
    this.http.post(this.apiURL, this.usuario).subscribe(
      (registeredUser: any) => {
        alert('Usuario registrado exitosamente');
        // Almacenar la info del usuario sin la contrasenia
        const user: Usuario = {
          id: registeredUser.id,
          nombre: registeredUser.nombre,
          apellidos: registeredUser.apellidos,
          correo: registeredUser.correo,
          direccion: registeredUser.direccion,
          rol: registeredUser.rol,
          password: '',
        };

        this.usuarioService.setUsuario(user);

        this.router.navigate(['/catalogo']);
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        alert('Error al registrar el usuario');
      }
    );

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
  }
}
