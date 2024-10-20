create table clientes (
    ID_Cliente int not null auto_increment,
    nombre varchar(30) not null,
    apellidos varchar(60) not null,
    correo varchar(30) not null unique,
    direccion varchar(100) not null,
    password varchar(20) not null,

    primary key (ID_Cliente)
)