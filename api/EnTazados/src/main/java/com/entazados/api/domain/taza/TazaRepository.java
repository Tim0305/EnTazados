package com.entazados.api.domain.taza;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TazaRepository extends JpaRepository<Taza, Integer> {
    List<Taza> findByExisteTrue();
    Optional<Taza> findByIdAndExisteTrue(Integer id);
}
