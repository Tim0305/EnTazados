package com.entazados.api.service;

import com.entazados.api.domain.compras.Compra;
import com.entazados.api.domain.compras.CompraRepository;
import com.entazados.api.domain.compras.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PedidoService {

    @Autowired
    private CompraRepository compraRepository;

    public List<Pedido> getPedidos() {
        // Recuperar todas las compras ordenadas por idPedido
        List<Compra> compras = compraRepository.findAllOrderByIdPedido();

        // Agrupar compras por idPedido
        Map<Integer, List<Compra>> comprasAgrupadas = compras.stream()
                .collect(Collectors.groupingBy(Compra::getIdPedido));

        // Crear objetos Pedido a partir de las listas de compras agrupadas
        return comprasAgrupadas.values().stream()
                .map(Pedido::new) // Constructor que acepta una lista de compras
                .collect(Collectors.toList());
    }

    public List<Pedido> getPedidosUsuario(Integer idUsuario) {
        // Recuperar todas las compras ordenadas por idPedido
        List<Compra> compras = compraRepository.findAllByUsuarioIdOrderByIdPedido(idUsuario);

        // Agrupar compras por idPedido
        Map<Integer, List<Compra>> comprasAgrupadas = compras.stream()
                .collect(Collectors.groupingBy(Compra::getIdPedido));

        // Crear objetos Pedido a partir de las listas de compras agrupadas
        return comprasAgrupadas.values().stream()
                .map(Pedido::new) // Constructor que acepta una lista de compras
                .collect(Collectors.toList());
    }
}
