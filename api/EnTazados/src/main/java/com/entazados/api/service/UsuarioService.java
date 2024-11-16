package com.entazados.api.service;

import com.entazados.api.domain.usuario.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public DatosRespuestaUsuario obtenerUsuarioCredenciales(DatosInicioSesionUsuario datosInicioSesionUsuario) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findByCorreoAndPassword(datosInicioSesionUsuario.correo(), datosInicioSesionUsuario.password());

        if (optionalUsuario.isPresent())
            return new DatosRespuestaUsuario(optionalUsuario.get());
        return null;
    }

    public Usuario obtenerUsuarioPorId(int id) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(id);
        if (optionalUsuario.isPresent())
            return optionalUsuario.get();
        return null;
    }

    public Integer obtenerIdUsuarioPreguntaRecuperarPassword(String correo, String respuestaPregunta) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findByCorreo(correo);

        if (optionalUsuario.isPresent()) {
            if (optionalUsuario.get().getRespuestaPregunta().equalsIgnoreCase(respuestaPregunta))
                return optionalUsuario.get().getId();
            else return -1;
        }
        else return -1;
    }

    public DatosRespuestaUsuario restablecerPassword(DatosRestablecerPassword datosRestablecerPassword) {
        Usuario usuario = obtenerUsuarioPorId(datosRestablecerPassword.idUsuario());

        if (usuario != null) {
            usuario.setPassword(datosRestablecerPassword.newPassword());
            usuarioRepository.save(usuario);
            return new DatosRespuestaUsuario(usuario);
        }
        return null;
    }
}
