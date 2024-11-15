package com.entazados.api.domain.compras;

import java.util.List;

public record DatosRegistroCompra(
        List<Integer> idTazas,
        Integer idUsuario
) {
}
