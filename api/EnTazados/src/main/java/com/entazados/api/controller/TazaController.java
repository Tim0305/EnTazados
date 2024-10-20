package com.entazados.api.controller;

import com.entazados.api.domain.taza.*;
import com.entazados.api.service.TazaService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tazas")
public class TazaController {
    @Autowired
    private TazaRepository tazaRepository;

    @Autowired
    private TazaService tazaService;

    @PostMapping
    public ResponseEntity<DatosRespuestaTaza> registrarTaza(@RequestBody DatosRegistroTaza datosRegistroTaza,
                                                            UriComponentsBuilder uriComponentsBuilder) {
        Taza taza = tazaRepository.save(new Taza(datosRegistroTaza));
        DatosRespuestaTaza datosRespuestaTaza = new DatosRespuestaTaza(taza);

        // Retornar en donde se encuentra el nuevo recurso "Location"
        URI url = uriComponentsBuilder.path("/tazas/{id}").buildAndExpand(taza.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaTaza);
    }

    @GetMapping
    public ResponseEntity<List<DatosRespuestaTaza>> listadoTazasExsitentes() {
        return ResponseEntity.ok(tazaService.obtenerTazasExistentes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosRespuestaTaza> obtenerTaza(@PathVariable Integer id) {
        return ResponseEntity.ok(tazaService.obtenerTazaPorIdExistente(id));
    }

    @PutMapping()
    @Transactional
    public ResponseEntity actualizarTaza(@RequestBody DatosActualizarTaza datosActualizarTaza) {
        Optional<Taza> tazaOptional = tazaRepository.findById(datosActualizarTaza.id());

        if (tazaOptional.isPresent()) {
            Taza taza = tazaOptional.get();
            taza.actualizarTaza(datosActualizarTaza);
            return ResponseEntity.ok(new DatosRespuestaTaza(taza));
        }
        return null;
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarTaza(@PathVariable Integer id) {
        Optional<Taza> tazaOptional = tazaRepository.findByIdAndExisteTrue(id);
        if (tazaOptional.isPresent()) {
            Taza taza = tazaOptional.get();
            taza.desactivarTaza();
            return ResponseEntity.noContent().build();
        }
        return null;
    }
}
