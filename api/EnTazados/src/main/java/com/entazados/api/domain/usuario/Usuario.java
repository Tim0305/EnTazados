package com.entazados.api.domain.usuario;

import com.entazados.api.domain.compras.Compra;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Usuario")
    private Integer id;
    private String nombre;
    private String apellidos;
    private String correo;
    private String direccion;
    private String password;
    private Integer rol;
    private String respuestaPregunta;

    @OneToMany(mappedBy = "usuario")
    private List<Compra> usuarioCompras;

    public Usuario(DatosRegistroUsuario datosRegistroUsuario) {
        nombre = datosRegistroUsuario.nombre();
        apellidos = datosRegistroUsuario.apellidos();
        correo = datosRegistroUsuario.correo();
        direccion = datosRegistroUsuario.direccion();
        password = datosRegistroUsuario.password();
        respuestaPregunta = datosRegistroUsuario.respuestaPregunta();

        // 1 -> administrador
        // 2 -> usuario normal
        rol = 2;
    }
}
