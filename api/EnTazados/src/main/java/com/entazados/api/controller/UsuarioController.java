package com.entazados.api.controller;

import com.entazados.api.domain.usuario.*;
import com.entazados.api.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registro")
    public ResponseEntity<DatosRespuestaUsuario> registrarUsuario(@RequestBody DatosRegistroUsuario datosRegistroUsuario) {
        Usuario usuario = usuarioRepository.save(new Usuario(datosRegistroUsuario));
        DatosRespuestaUsuario datosRespuestaUsuario = new DatosRespuestaUsuario(usuario);

        return ResponseEntity.ok(datosRespuestaUsuario);
    }


    @PostMapping("/login")
    public ResponseEntity<DatosRespuestaUsuario> loginUsuario(@RequestBody DatosInicioSesionUsuario datosInicioSesionUsuario) {
        DatosRespuestaUsuario usuarioAutenticado = usuarioService.obtenerUsuarioCredenciales(datosInicioSesionUsuario);

        if (usuarioAutenticado != null) {
            return ResponseEntity.ok(usuarioAutenticado);
        } else {
            return ResponseEntity.status(401).build(); // Retornar código 401 si la autenticación falla
        }
    }

    @GetMapping("/verificar-pregunta")
    public ResponseEntity<Integer> verificarPreguntaRecuperarPassword(@RequestParam String correo, @RequestParam String respuestaPregunta) {
        Integer idUsuario = usuarioService.obtenerIdUsuarioPreguntaRecuperarPassword(correo, respuestaPregunta);
        return ResponseEntity.ok(idUsuario);
    }

    @PutMapping("/restablecer-password")
    public ResponseEntity<DatosRespuestaUsuario> restablecerPassword(@RequestBody DatosRestablecerPassword datosRestablecerPassword) {
        DatosRespuestaUsuario usuarioActualizado = usuarioService.restablecerPassword(datosRestablecerPassword);

        if (usuarioActualizado != null) {
            return ResponseEntity.ok(usuarioActualizado);
        } else {
            return ResponseEntity.status(400).build(); // Retornar código 400 si no se encuentra el usuario
        }
    }
}
