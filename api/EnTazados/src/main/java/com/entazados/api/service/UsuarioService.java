package com.entazados.api.service;

import com.entazados.api.domain.usuario.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    // rounds -> 10
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);

    public DatosRespuestaUsuario registrarUsuario(DatosRegistroUsuario datosRegistroUsuario) {
        Usuario usuario = new Usuario(datosRegistroUsuario);
        usuario.setPassword(bCryptPasswordEncoder.encode(usuario.getPassword()));
        return new DatosRespuestaUsuario(usuarioRepository.save(usuario));
    }

    public DatosRespuestaUsuario obtenerUsuarioCredenciales(DatosInicioSesionUsuario datosInicioSesionUsuario) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findByCorreo(datosInicioSesionUsuario.correo());

        if (optionalUsuario.isPresent())
            if (bCryptPasswordEncoder.matches(datosInicioSesionUsuario.password(), optionalUsuario.get().getPassword())) {
                System.out.println(datosInicioSesionUsuario.password());
                return new DatosRespuestaUsuario(optionalUsuario.get());
            }
            else
                return null;
        else
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
            usuario.setPassword(bCryptPasswordEncoder.encode(datosRestablecerPassword.newPassword()));
            usuarioRepository.save(usuario);
            return new DatosRespuestaUsuario(usuario);
        }
        return null;
    }
}
