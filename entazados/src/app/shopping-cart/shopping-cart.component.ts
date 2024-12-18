import { Component } from '@angular/core';
import { CartService } from '../../services/CartService/cart.service';
import { Product } from '../../models/Product.model';
import { ReceiptService } from '../../services/ReceiptService/receipt.service';
import { CommonModule } from '@angular/common';
import { PaypalButtonComponent } from '../paypal-button/paypal-button.component'; // Asegúrate de importar

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, PaypalButtonComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  products: Product[] = [];
  total: number = 0;
  envio: number = 100;
  iva: number = 0;

  constructor(
    private cartService: CartService,
    private receiptService: ReceiptService
  ) {
    this.products = cartService.getItems();
    console.log(this.products);
    this.total = cartService.getTotal();
    if (this.products.length === 0) {
      this.envio = 0;
    }
    this.iva = this.total * 0.16;
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.products = this.cartService.getItems();
    if (this.products.length === 0) {
      this.envio = 0;
    }
    this.total = this.cartService.getTotal();
    this.iva = this.total * 0.16;
  }
}
