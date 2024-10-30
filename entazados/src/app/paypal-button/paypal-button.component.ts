import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/CartService/cart.service';
import { ReceiptService } from '../../services/ReceiptService/receipt.service';
import { Product } from '../../models/Product.model';

declare var paypal: any; // Declara PayPal como una variable global

@Component({
   selector: 'app-paypal-button',
   standalone: true,
   template: `<div id="paypal-button-container"></div>`,
})
export class PaypalButtonComponent implements OnInit {
   @Input() total: number = 10;
   @Input() productos: Product[] = [];

   constructor(private receiptService: ReceiptService, private cartService: CartService) {
 
   }

   ngOnInit(): void {
      paypal.Buttons({
         createOrder: (data: any, actions: any) => {
            return actions.order.create({
               purchase_units: [{
                  amount: {
                     value: this.total.toFixed(2).toString()// Monto total del pago
                  }
               }]
            });
         },
         onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
               alert(`Pago completado por ${details.payer.name.given_name}!`);
               this.receiptService.generateReceipt(this.productos, this.total);
               this.cartService.clearCart();

            });
         },
         onError: (err: any) => {
            console.error('Error en el pago:', err);
         }
      }).render('#paypal-button-container'); // Renderiza el botón en el contenedor
   }
}
