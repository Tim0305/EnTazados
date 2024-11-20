import { Injectable } from '@angular/core';
import { Product } from '../../models/Product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'http://localhost:8080/tazas'; // URL de la API
  private products: Product[] = []; // Lista local de productos

  constructor(private http: HttpClient) {
    // Obtener los productos cuando se inicializa el servicio
    this.fetchProducts();
  }

  // Método para agregar un producto localmente
  addProduct(product: Product) {
    this.products.push(product);
  }

  // Método para eliminar un producto localmente
  removeProduct(productId: number) {
    this.products = this.products.map((product) =>
      product.id === productId ? { ...product, existe: false } : product
    );
  }

  activateProduct(productId: number) {
    this.products = this.products.map((product) =>
      product.id === productId ? { ...product, existe: true } : product
    );
  }

  // Método para devolver los productos almacenados localmente
  getProducts() {
    return this.products;
  }

  getValidProducts() {
    return this.products.filter((item) => item.existe && item.cantidad > 0);
  }

  // Obtener productos desde el backend y almacenarlos en la lista local
  fetchProducts() {
    this.http.get<Product[]>(this.apiURL).subscribe(
      (data) => {
        this.products = data; // Almacenar la respuesta en la lista local
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
}
