package com.entazados.api.domain.usuario;

public record DatosRegistroUsuario(
        String nombre,
        String apellidos,
        String correo,
        String direccion,
        String password
) {
}
