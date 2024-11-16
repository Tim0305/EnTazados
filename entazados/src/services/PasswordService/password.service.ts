import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor() {}

  validarPassword(password: string): boolean {
    // Expresión regular actualizada:
    // - Al menos 8 caracteres
    // - Máximo 20 caracteres
    // - Al menos una letra mayúscula
    // - Al menos una letra minúscula
    // - Al menos un número
    // - Al menos un carácter especial
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,20}$/;

    // Validar la contraseña con el regex
    return regex.test(password);
  }
}
