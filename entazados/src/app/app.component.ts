import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UsuarioService } from '../services/UsuarioService/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'entazados';

  constructor(private userService: UsuarioService) {}

  isAdmin() {
    if (this.userService.getRol() === 1) return true;
    return false;
  }

  isUser() {
    if (this.userService.getRol() === 2) return true;
    return false;
  }

  isLoggedIn() {
    if (this.userService.getRol() !== 0) return true;
    return false;
  }
}
