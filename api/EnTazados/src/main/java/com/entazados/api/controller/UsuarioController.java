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

    @PostMapping
    public ResponseEntity<DatosRespuestaUsuario> registrarUsuario(@RequestBody DatosRegistroUsuario datosRegistroUsuario, UriComponentsBuilder uriComponentsBuilder) {
        Usuario usuario = usuarioRepository.save(new Usuario(datosRegistroUsuario));
        DatosRespuestaUsuario datosRespuestaUsuario = new DatosRespuestaUsuario(usuario);

        // Retornar en donde se encuentra el nuevo recurso "Location"
        URI url = uriComponentsBuilder.path("/usuarios/{id}").buildAndExpand(usuario.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaUsuario);
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
}
