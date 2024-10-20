package com.entazados.api.domain.taza;

public record DatosRespuestaTaza(Integer id,
                                 String nombre,
                                 String descripcion,
                                 Double precio,
                                 String imagenUrl,
                                 Integer cantidad) {

    public DatosRespuestaTaza(Taza taza) {
        this(taza.getId(), taza.getNombre(), taza.getDescripcion(), taza.getPrecio(), taza.getImagenUrl(), taza.getCantidad());
    }
}
