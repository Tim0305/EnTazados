package com.entazados.api.domain.cliente;

public record DatosRespuestaUsuario(
        Integer id,
        String nombre,
        String apellidos,
        String direccion,
        String correo,
        Integer rol
) {
    public DatosRespuestaUsuario(Usuario usuario) {
        this(usuario.getId(), usuario.getNombre(), usuario.getApellidos(), usuario.getDireccion(), usuario.getCorreo(), usuario.getRol());
    }
}
