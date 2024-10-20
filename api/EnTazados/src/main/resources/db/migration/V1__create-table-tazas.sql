create table tazas (
    ID_Taza int not null auto_increment,
    nombre varchar(30) not null,
    descripcion varchar(30) not null,
    precio double not null,
    imagen varchar(100) not null,
    cantidad int not null,
    existe bit not null,

    primary key(ID_Taza)
)