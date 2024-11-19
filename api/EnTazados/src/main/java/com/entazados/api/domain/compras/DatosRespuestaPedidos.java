package com.entazados.api.domain.compras;

import com.entazados.api.domain.taza.DatosRespuestaTaza;
import com.entazados.api.domain.usuario.DatosRespuestaUsuario;

import java.time.LocalDateTime;
import java.util.List;

public record DatosRespuestaPedidos(
        Integer idPedido,
        LocalDateTime fechaCompra,
        DatosRespuestaUsuario usuario,
        List<DatosRespuestaTaza> tazas,
        Double precioActualTaza,
        Boolean activo
) {

    public DatosRespuestaPedidos(Pedido pedido) {
        this(pedido.getId()
                ,pedido.getFechaCompra()
                ,new DatosRespuestaUsuario(pedido.getUsuario())
                ,pedido.getTazas().stream().map(DatosRespuestaTaza::new).toList()
                ,pedido.getTotal()
                ,pedido.getActivo());
    }
}
