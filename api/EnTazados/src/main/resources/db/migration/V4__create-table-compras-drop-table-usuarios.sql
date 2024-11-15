drop table usuarios;

create table usuarios (
    ID_Usuario int not null auto_increment,
    nombre varchar(30) not null,
    apellidos varchar(60) not null,
    correo varchar(30) not null unique,
    direccion varchar(100) not null,
    password varchar(20) not null,
    rol int not null,
    primary key (ID_Usuario)
);

CREATE TABLE compras (
    ID_Compra INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    ID_Pedido INT NOT NULL,
    fecha_compra DATETIME NOT NULL,
    ID_Usuario INT NOT NULL,
    ID_Taza INT NOT NULL,
    FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario),  -- Suponiendo que la tabla de usuarios tiene una columna 'ID_Usuario'
    FOREIGN KEY (ID_Taza) REFERENCES tazas(ID_Taza)  -- Suponiendo que la tabla de tazas tiene una columna 'ID_Taza'
);
