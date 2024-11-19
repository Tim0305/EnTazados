package com.entazados.api.domain.compras;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CompraRepository extends JpaRepository<Compra, Integer> {
    Optional<Compra> findTopByOrderByIdDesc();

    @Query("SELECT c FROM Compra c ORDER BY c.idPedido")
    List<Compra> findAllOrderByIdPedido();
}
