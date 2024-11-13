package com.entazados.api.domain.cliente;

public record DatosRegistroUsuario(
        String nombre,
        String apellidos,
        String correo,
        String direccion,
        String password
) {
}
