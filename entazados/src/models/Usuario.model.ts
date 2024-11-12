export interface Usuario {
   id_Cliente: number;
   nombre: string;
   apellidos: string;
   correo: number;
   direccion: string;
   rol: number; //0 = no logeado, 1 = administrador, 2 = usario normal
}
