package com.entazados.api.domain.compras;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompraRepository extends JpaRepository<Compra, Integer> {
    Optional<Compra> findTopByOrderByIdDesc();
}
