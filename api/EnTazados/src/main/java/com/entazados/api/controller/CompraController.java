package com.entazados.api.controller;

import com.entazados.api.domain.compras.DatosRegistroCompra;
import com.entazados.api.domain.compras.DatosRespuestaPedido;
import com.entazados.api.domain.compras.Pedido;
import com.entazados.api.service.CompraService;
import com.entazados.api.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/compras")
public class CompraController {

    @Autowired
    CompraService compraService;

    @Autowired
    PedidoService pedidoService;

    @PostMapping
    public ResponseEntity<DatosRespuestaPedido> registrarCompra(@RequestBody DatosRegistroCompra datosRegistroCompra) {
        return ResponseEntity.ok(compraService.registrarCompra(datosRegistroCompra));
    }

    @GetMapping
    public ResponseEntity<List<DatosRespuestaPedido>> getPedidos() {
        List<Pedido> pedidos = pedidoService.getPedidos();

        return ResponseEntity.ok(pedidos.stream().map(DatosRespuestaPedido::new).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<DatosRespuestaPedido>> getPedidosUsuario(@PathVariable Integer id) {
        List<Pedido> pedidos = pedidoService.getPedidosUsuario(id);

        return ResponseEntity.ok(pedidos.stream().map(DatosRespuestaPedido::new).toList());
    }
}
