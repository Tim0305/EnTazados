package com.entazados.api.domain.compras;

import com.entazados.api.domain.taza.Taza;
import com.entazados.api.domain.usuario.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Pedido {

    private Integer id;
    private Usuario usuario;
    private LocalDateTime fechaCompra;
    private Double total;
    private List<Taza> tazas;
    private Boolean activo;

    public Pedido(List<Compra> compras) {
        this.id = compras.get(0).getIdPedido();
        this.usuario = compras.get(0).getUsuario();
        this.fechaCompra = compras.get(0).getFechaCompra();
        this.total = 0.0;

        this.activo = compras.get(0).getActivo();

        this.tazas = new ArrayList<>();

        for(Compra compra: compras) {
            this.tazas.add(compra.getTaza());
            this.total += compra.getPrecioActualTaza();
        }
    }
}
