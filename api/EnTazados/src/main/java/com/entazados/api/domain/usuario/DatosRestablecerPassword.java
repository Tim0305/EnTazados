package com.entazados.api.domain.usuario;

public record DatosRestablecerPassword(
        Integer idUsuario,
        String newPassword
) {
}
