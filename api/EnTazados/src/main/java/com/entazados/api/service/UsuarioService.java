package com.entazados.api.service;

import com.entazados.api.domain.cliente.DatosInicioSesionUsuario;
import com.entazados.api.domain.cliente.DatosRespuestaUsuario;
import com.entazados.api.domain.cliente.Usuario;
import com.entazados.api.domain.cliente.UsuarioRepository;
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
}
