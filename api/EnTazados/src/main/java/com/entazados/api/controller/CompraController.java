package com.entazados.api.controller;

import com.entazados.api.domain.compras.DatosRegistroCompra;
import com.entazados.api.domain.compras.DatosRespuestaPedidos;
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
    public ResponseEntity registrarCompra(@RequestBody DatosRegistroCompra datosRegistroCompra) {
        compraService.registrarCompra(datosRegistroCompra);
        return ResponseEntity.ok("Compra registrada correctamente");
    }

    @GetMapping
    public ResponseEntity<List<DatosRespuestaPedidos>> getPedidos() {
        List<Pedido> pedidos = pedidoService.getPedidos();

        return ResponseEntity.ok(pedidos.stream().map(DatosRespuestaPedidos::new).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<DatosRespuestaPedidos>> getPedidosUsuario(@PathVariable Integer id) {
        List<Pedido> pedidos = pedidoService.getPedidosUsuario(id);

        return ResponseEntity.ok(pedidos.stream().map(DatosRespuestaPedidos::new).toList());
    }
}
