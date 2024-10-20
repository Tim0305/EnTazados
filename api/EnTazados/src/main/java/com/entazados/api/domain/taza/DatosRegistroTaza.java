package com.entazados.api.domain.taza;

public record DatosRegistroTaza(String nombre,
                                String descripcion,
                                Double precio,
                                String imagenUrl,
                                Integer cantidad) {
}
