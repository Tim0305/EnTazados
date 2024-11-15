package com.entazados.api.service;

import com.entazados.api.domain.usuario.DatosInicioSesionUsuario;
import com.entazados.api.domain.usuario.DatosRespuestaUsuario;
import com.entazados.api.domain.usuario.Usuario;
import com.entazados.api.domain.usuario.UsuarioRepository;
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
}
