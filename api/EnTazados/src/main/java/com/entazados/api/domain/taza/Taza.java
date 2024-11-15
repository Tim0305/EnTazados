package com.entazados.api.domain.taza;

import com.entazados.api.domain.compras.Compra;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Table(name = "tazas")
@Entity(name = "Taza")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class Taza {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Taza")
    private Integer id;
    private String nombre;
    private String descripcion;
    private Double precio;
    @Column(name = "imagen")
    private String imagenUrl;
    private Integer cantidad;
    private Boolean existe;

    @OneToMany(mappedBy = "taza")
    private List<Compra> tazaCompras;

    public Taza(DatosRegistroTaza datosRegistroTaza) {
        nombre = datosRegistroTaza.nombre();
        descripcion = datosRegistroTaza.descripcion();
        precio = datosRegistroTaza.precio();
        imagenUrl = datosRegistroTaza.imagenUrl();
        cantidad = datosRegistroTaza.cantidad();
        if (cantidad == 0)
            existe = false;
        else
            existe = true;
    }

    public void actualizarTaza(DatosActualizarTaza datosActualizarTaza) {
        if (datosActualizarTaza.nombre() != null)
            nombre = datosActualizarTaza.nombre();
        if (datosActualizarTaza.descripcion() != null)
            descripcion = datosActualizarTaza.descripcion();
        if (datosActualizarTaza.precio() != null)
            precio = datosActualizarTaza.precio();
        if (datosActualizarTaza.imagenUrl() != null)
            imagenUrl = datosActualizarTaza.imagenUrl();
        if (datosActualizarTaza.cantidad() != null) {
            cantidad = datosActualizarTaza.cantidad();
            if (datosActualizarTaza.cantidad() == 0)
                existe = false;
            else
                existe = true;
        }
        if (datosActualizarTaza.existe() != null)
            existe = datosActualizarTaza.existe();
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
        if (cantidad <= 0)
            existe = false;
        else
            existe = true;
    }

    public void desactivarTaza() {
        existe = false;
    }

    public void activarTaza() {
        existe = true;
    }
}
