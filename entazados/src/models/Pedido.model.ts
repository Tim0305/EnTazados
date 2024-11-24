import { Product } from './Product.model';
import { Usuario } from './Usuario.model';

export interface Pedido {
  idPedido: number;
  fechaCompra: string; // Se usa string para representar fechas en formato ISO
  usuario: Usuario;
  tazas: Product[];
  total: number;
  iva: number;
  activo: boolean;
}
