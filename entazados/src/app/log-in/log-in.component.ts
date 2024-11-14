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

  constructor(
    private router: Router,
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  onClickLogIn() {
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
