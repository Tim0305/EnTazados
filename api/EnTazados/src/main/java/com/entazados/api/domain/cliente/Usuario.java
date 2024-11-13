package com.entazados.api.domain.cliente;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Cliente")
    private Integer id;
    private String nombre;
    private String apellidos;
    private String correo;
    private String direccion;
    private String password;
    private Integer rol;

    public Usuario(DatosRegistroUsuario datosRegistroUsuario) {
        nombre = datosRegistroUsuario.nombre();
        apellidos = datosRegistroUsuario.apellidos();
        correo = datosRegistroUsuario.correo();
        direccion = datosRegistroUsuario.direccion();
        password = datosRegistroUsuario.password();

        // 1 -> administrador
        // 2 -> usuario normal
        rol = 2;
    }
}
