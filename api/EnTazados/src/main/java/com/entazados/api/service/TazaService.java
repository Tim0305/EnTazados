package com.entazados.api.service;

import com.entazados.api.domain.taza.DatosRespuestaTaza;
import com.entazados.api.domain.taza.Taza;
import com.entazados.api.domain.taza.TazaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TazaService {
    @Autowired
    TazaRepository tazaRepository;

    public List<DatosRespuestaTaza> obtenerTazas() {
        return tazaRepository.findAll().stream()
                .map(t -> new DatosRespuestaTaza(t))
                .collect(Collectors.toList());
    }

    public List<DatosRespuestaTaza> obtenerTazasExistentes() {
        return tazaRepository.findByExisteTrue().stream()
                .map(t -> new DatosRespuestaTaza(t))
                .collect(Collectors.toList());
    }

    public Taza obtenerTazaPorId(Integer id) {
        Optional<Taza> tazaOptional = tazaRepository.findById(id);
        if (tazaOptional.isPresent())
            return tazaOptional.get();
        else return null;
    }

    public DatosRespuestaTaza obtenerTazaPorIdExistente(Integer id) {
        Optional<Taza> tazaOptional = tazaRepository.findByIdAndExisteTrue(id);
        if (tazaOptional.isPresent())
            return new DatosRespuestaTaza(tazaOptional.get());
        else return null;
    }
}
