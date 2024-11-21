export interface Pedido {
    idPedido: number;
    fechaCompra: string; // Se usa string para representar fechas en formato ISO
    usuario: Usuario;
    tazas: Taza[];
    precioActualTaza: number;
    activo: boolean;
  }
  
  export interface Usuario {
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    correo: string;
    rol: number;
  }
  
  export interface Taza {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagenUrl: string;
    cantidad: number;
    existe: boolean;
  }