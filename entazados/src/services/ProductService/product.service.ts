import { Injectable } from '@angular/core';
import { Product } from '../../models/Product.model';
import { XMLService } from '../XMLService/xml.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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

  constructor(private xmlService: XMLService) {
    // this.xmlService.getProducts().subscribe((data) => {
    //   this.products = data;
    // });
  }
}
