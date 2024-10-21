import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/CartService/cart.service';
import { Product } from '../../models/Product.model';
import { ProductService } from '../../services/ProductService/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.css',
})
export class CatalogListComponent {
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.getItems());
  }

  ngOnInit(): void {
    this.productService.fetchProducts();
    this.products = this.productService.getProducts();
    console.log(this.products);
  }
}
