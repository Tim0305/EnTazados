import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/UsuarioService/usuario.service';
import { Router } from '@angular/router';
import { PasswordService } from '../../services/PasswordService/password.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private apiURL = 'http://localhost:8080/usuarios/registro'; // URL de la API

  // Propiedades para el nuevo producto
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellidos: '',
    correo: '',
    direccion: '',
    rol: 0,
    password: '',
    respuestaPregunta: '',
  };

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private router: Router,
    private passwordService: PasswordService
  ) {}

  onClickAgregarUsuario() {
    if (
      !this.usuario.correo ||
      !this.usuario.password ||
      !this.usuario.nombre ||
      !this.usuario.apellidos ||
      !this.usuario.respuestaPregunta
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (!this.passwordService.validarPassword(this.usuario.password)) {
      alert('Contraseña invalida');
      return;
    }

    if (this.usuario.nombre.length > 30) {
      alert('El nombre debe tener maximo 30 caracteres');
      return;
    }

    if (this.usuario.apellidos.length > 60) {
      alert('Los apellidos deben tener maximo 60 caracteres');
      return;
    }

    if (this.usuario.correo.length > 30) {
      alert('El correo debe tener maximo 30 caracteres');
      return;
    }

    if (!this.usuario.correo.includes('@')) {
      alert('El correo es invalido');
      return;
    }

    if (this.usuario.direccion.length > 100) {
      alert('La direccion debe tener maximo 100 caracteres');
      return;
    }

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
          respuestaPregunta: registeredUser.respuesta_pregunta,
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
      respuestaPregunta: '',
    };
  }
}
