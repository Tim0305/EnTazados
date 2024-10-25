import { Component, OnInit } from '@angular/core';

declare var paypal: any; // Declara PayPal como una variable global

@Component({
  selector: 'app-paypal-button',
  standalone: true,
  template: `<div id="paypal-button-container"></div>`,
})
export class PaypalButtonComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '10.00' // Monto total del pago
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert(`Pago completado por ${details.payer.name.given_name}!`);
        });
      },
      onError: (err: any) => {
        console.error('Error en el pago:', err);
      }
    }).render('#paypal-button-container'); // Renderiza el botón en el contenedor
  }
}
