package com.entazados.api.domain.taza;

public record DatosActualizarTaza(Integer id,
                                  String nombre,
                                  String descripcion,
                                  Double precio,
                                  String imagenUrl,
                                  Integer cantidad,
                                  Boolean existe) {
}
