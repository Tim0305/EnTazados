package com.entazados.api.domain.compras;


import com.entazados.api.domain.taza.Taza;
import com.entazados.api.domain.usuario.Usuario;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Table(name = "compras")
@Entity(name = "Compra")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "idPedido")
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Compra")
    private Integer id;
    @Column(name = "ID_Pedido")
    private Integer idPedido;
    private LocalDateTime fechaCompra;
    private Double precioActualTaza;

    private Boolean activo;
    @ManyToOne
    @JoinColumn(name = "ID_Usuario", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "ID_Taza", nullable = false)
    private Taza taza;
}
