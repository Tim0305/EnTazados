package com.entazados.api.controller;

import com.entazados.api.domain.compras.DatosRegistroCompra;
import com.entazados.api.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/compras")
public class CompraController {

    @Autowired
    CompraService compraService;

    @PostMapping
    public ResponseEntity registrarCompra(@RequestBody DatosRegistroCompra datosRegistroCompra) {
        compraService.registrarCompra(datosRegistroCompra);
        return ResponseEntity.ok("Compra registrada correctamente");
    }
}
