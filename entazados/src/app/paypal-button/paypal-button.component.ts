import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/CartService/cart.service';
import { ReceiptService } from '../../services/ReceiptService/receipt.service';
import { Product } from '../../models/Product.model';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../services/UsuarioService/usuario.service';
import { Pedido } from '../../models/Pedido.model';

declare var paypal: any; // Declara PayPal como una variable global

@Component({
  selector: 'app-paypal-button',
  standalone: true,
  template: `<div id="paypal-button-container"></div>`,
})
export class PaypalButtonComponent implements OnInit {
  @Input() total: number = 10;
  @Input() productos: Product[] = [];

  private apiURL = 'http://localhost:8080/compras'; // URL de la API

  constructor(
    private receiptService: ReceiptService,
    private cartService: CartService,
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.total.toFixed(2).toString(), // Monto total del pago
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert(`Pago completado por ${details.payer.name.given_name}!`);

            // Registrar la compra
            const idTazas: number[] = [];
            this.productos.forEach((producto) => {
              idTazas.push(producto.id);
            });
            const idUsuario = this.usuarioService.getUsuario().id;
            this.http.post(this.apiURL, { idTazas, idUsuario }).subscribe(
              (response: any) => {
                this.receiptService.generateReceipt(response);
              },
              (error) => {
                console.error('Error al registrar la compra:', error);
                alert('Error al registrar la compra');
              }
            );

            this.cartService.clearCart();
          });
        },
        onError: (err: any) => {
          console.error('Error en el pago:', err);
        },
      })
      .render('#paypal-button-container'); // Renderiza el botón en el contenedor
  }
}
