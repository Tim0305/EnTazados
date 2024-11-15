import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/CartService/cart.service';
import { Product } from '../../models/Product.model';
import { ProductService } from '../../services/ProductService/product.service';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/UsuarioService/usuario.service';
import { Router } from '@angular/router';

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
    private productService: ProductService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los productos y suscríbete al resultado
    this.productService.fetchProducts();
    this.products = this.productService.getValidProducts();
  }

  addToCart(product: Product) {
    // Verificar si el usuario esta loggeado
    if (this.usuarioService.getRol() == 2) {
      alert('Producto agregado al carrito');
      this.cartService.addToCart(product);
      console.log(this.cartService.getItems());
    } else this.router.navigate(['/log-in']);
  }
}
