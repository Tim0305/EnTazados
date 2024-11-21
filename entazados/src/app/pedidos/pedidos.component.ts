import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/OrderService/order.service'; // Ajusta la ruta según la ubicación del servicio
import { Pedido } from '../../models/Pedido.model'; // Ajusta la ruta según la ubicación del modelo
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pedidos',
  standalone: true, // Este componente es standalone
  imports: [CommonModule], // Importa CommonModule para usar pipes y directivas básicas como *ngIf y *ngFor
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'], // Opcional: puedes usar Tailwind directamente
})
export class PedidosComponent {
  pedidos: Pedido[] = [];
  cargando = true;
  error: string | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos(): void {
    this.cargando = true;
    this.error = null;

    this.orderService.getPedidos().subscribe({
      next: (data) => {
        this.pedidos = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los pedidos.';
        this.cargando = false;
      },
    });
  }
}


