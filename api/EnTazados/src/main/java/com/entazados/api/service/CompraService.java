package com.entazados.api.service;

import com.entazados.api.domain.compras.*;
import com.entazados.api.domain.taza.Taza;
import com.entazados.api.domain.taza.TazaRepository;
import com.entazados.api.domain.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CompraService {

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    TazaService tazaService;

    @Autowired
    TazaRepository tazaRepository;

    @Autowired
    CompraRepository compraRepository;

    public DatosRespuestaPedido registrarCompra(DatosRegistroCompra datosRegistroCompra) {
        int idPedido = 1;
        // Obtener la ultima compra para establecer el id del nuevo pedido
        Compra lastCompra = getLastCompra();
        if (lastCompra != null)
            idPedido = lastCompra.getIdPedido() + 1;

        Usuario usuario = usuarioService.obtenerUsuarioPorId(datosRegistroCompra.idUsuario());
        LocalDateTime ldt = LocalDateTime.now();
        List<Compra> compras = new ArrayList<>();

        if (usuario != null) {
            for (Integer idTaza : datosRegistroCompra.idTazas()) {
                Compra compra = new Compra();
                Taza taza = tazaService.obtenerTazaPorId(idTaza);

                if (taza.getCantidad() <= 0 || !taza.getExiste())
                    throw new RuntimeException("La taza " + taza.getId() + " no existe o no tiene existencias");

                compra.setUsuario(usuario);
                compra.setTaza(taza);
                compra.setFechaCompra(ldt);
                compra.setIdPedido(idPedido);
                compra.setPrecioActualTaza(taza.getPrecio());
                compra.setActivo(true);

                taza.setCantidad(taza.getCantidad() - 1);

                compraRepository.save(compra);
                tazaRepository.save(taza);
                compras.add(compra);
            }
            return new DatosRespuestaPedido(new Pedido(compras));
        }
        else
            throw new RuntimeException("ID de Usuario incorrecto");
    }

    private Compra getLastCompra() {
        Optional<Compra> optionalCompra = compraRepository.findTopByOrderByIdDesc();
        if (optionalCompra.isPresent())
            return optionalCompra.get();
        return null;
    }
}
