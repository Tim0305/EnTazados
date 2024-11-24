package com.entazados.api.domain.compras;

import com.entazados.api.domain.taza.DatosRespuestaTaza;
import com.entazados.api.domain.usuario.DatosRespuestaUsuario;

import java.time.LocalDateTime;
import java.util.List;

public record DatosRespuestaPedido(
        Integer idPedido,
        LocalDateTime fechaCompra,
        DatosRespuestaUsuario usuario,
        List<DatosRespuestaTaza> tazas,
        Double total,
        Double iva,
        Boolean activo
) {

    public DatosRespuestaPedido(Pedido pedido) {
        this(pedido.getId()
                ,pedido.getFechaCompra()
                ,new DatosRespuestaUsuario(pedido.getUsuario())
                ,pedido.getTazas().stream().map(DatosRespuestaTaza::new).toList()
                ,pedido.getTotal()
                ,pedido.getIva()
                ,pedido.getActivo());
    }
}
