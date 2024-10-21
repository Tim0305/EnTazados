import { Injectable } from '@angular/core';
import { Product } from '../../models/Product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class ProductService {
<<<<<<< HEAD
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
    this.products = this.products.filter((item) => item.id !== productId);
  }

  // Método para devolver los productos almacenados localmente
  getProducts() {
    return this.products;
  }

  // Obtener productos desde el backend y almacenarlos en la lista local
  fetchProducts() {
    this.http.get<Product[]>(this.apiURL).subscribe(
      (data) => {
        this.products = data; // Almacenar la respuesta en la lista local
        console.log('Productos obtenidos:', this.products);
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
=======
   private products: Product[] = [
      {
         id: 1,
         nombre: 'Producto 1',
         descripcion: 'Prod 1',
         precio: 10,
         imagenURL:
            'https://img.freepik.com/vector-gratis/icon-vector-dibujos-animados-carne-pollo-ilustracion-icon-objeto-alimentos-vector-plano-aislado_138676-12893.jpg',
      },
      {
         id: 2,
         nombre: 'Producto 2',
         descripcion: 'Prod 2',
         precio: 20,
         imagenURL:
            'https://img.freepik.com/vector-gratis/icon-vector-dibujos-animados-carne-pollo-ilustracion-icon-objeto-alimentos-vector-plano-aislado_138676-12893.jpg',
      },
      {
         id: 3,
         nombre: 'Producto 3',
         descripcion: 'Prod 3',
         precio: 30,
         imagenURL:
            'https://img.freepik.com/vector-gratis/icon-vector-dibujos-animados-carne-pollo-ilustracion-icon-objeto-alimentos-vector-plano-aislado_138676-12893.jpg',
      },
      {
         id: 4,
         nombre: 'Producto 1',
         descripcion: 'Prod 1',
         precio: 10,
         imagenURL:
            'https://img.freepik.com/vector-gratis/icon-vector-dibujos-animados-carne-pollo-ilustracion-icon-objeto-alimentos-vector-plano-aislado_138676-12893.jpg',
      },
      {
         id: 5,
         nombre: 'Producto 2',
         descripcion: 'Prod 2',
         precio: 20,
         imagenURL:
            'https://img.freepik.com/vector-gratis/icon-vector-dibujos-animados-carne-pollo-ilustracion-icon-objeto-alimentos-vector-plano-aislado_138676-12893.jpg',
      },
      {
         id: 6,
         nombre: 'Producto 3',
         descripcion: 'Prod 3',
         precio: 30,
         imagenURL:
            'https://img.freepik.com/vector-gratis/icon-vector-dibujos-animados-carne-pollo-ilustracion-icon-objeto-alimentos-vector-plano-aislado_138676-12893.jpg',
      },
   ];

   addProduct(product: Product) {
      this.products.push(product);
   }

   removeProduct(productId: number) {
      this.products = this.products.filter((item) => item.id !== productId);
   }

   getProducts() {
      return this.products;
   }
>>>>>>> f1afbcd097c12f134c3528746858b596dac66bbe
}
