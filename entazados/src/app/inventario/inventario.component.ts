import { Component } from '@angular/core';
import { Product } from '../../models/Product.model';
import { ProductService } from '../../services/ProductService/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css',
})
export class InventarioComponent {
  products: Product[] = [];

  private apiURL = 'http://localhost:8080/tazas';

  // Propiedades para el nuevo producto
  product: Product = {
    id: 0, // ID se asignará automáticamente en el servidor, puede mantenerse en 0 aquí
    nombre: '',
    descripcion: '',
    precio: 0,
    imagenUrl: '',
    cantidad: 0,
    existe: true,
  };

  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {}

  //Fucion para abrir el modal (pop up)
  openModalAgregarTaza() {
    const modal: any = document.getElementById('my_modal_1');
    if (modal) {
      modal.showModal();
    }
  }

  //Fucion para cerrar el modal (pop up)
  closeModalAgregarTaza() {
    const modal: any = document.getElementById('my_modal_1');
    if (modal) {
      modal.close();
    }

    // Limpiar el objeto de entrada
    this.product = {
      id: 0, // ID se asignará automáticamente en el servidor, puede mantenerse en 0 aquí
      nombre: '',
      descripcion: '',
      precio: 0,
      imagenUrl: '',
      cantidad: 0,
      existe: true,
    };
  }

  openModalEditarTaza(selectedProduct: Product) {
    const modal: any = document.getElementById('my_modal_2');
    if (modal) {
      modal.showModal();
      this.product = { ...selectedProduct };
    }
  }

  closeModalEditarTaza() {
    const modal: any = document.getElementById('my_modal_2');
    if (modal) {
      modal.close();
    }

    // Limpiar los valores de los inputs
    this.product = {
      id: 0, // ID se asignará automáticamente en el servidor, puede mantenerse en 0 aquí
      nombre: '',
      descripcion: '',
      precio: 0,
      imagenUrl: '',
      cantidad: 0,
      existe: true,
    };
  }

  ngOnInit(): void {
    // Llama al servicio para obtener los productos y suscríbete al resultado
    this.productService.fetchProducts();
    this.products = this.productService.getProducts();
  }

  onClickEditar() {
    this.http.put(this.apiURL, this.product).subscribe(
      () => {
        alert('Producto modificado exitosamente');
        // Llama al servicio para obtener los productos y suscríbete al resultado
        this.productService.updateProduct(this.product);
        this.products = this.productService.getProducts();
        this.closeModalEditarTaza();
      },
      (error) => {
        console.error('Error al modificar el producto:', error);
        alert('Error al modificar el producto');
      }
    );
  }

  onClickAgregar() {
    // Realizar una solicitud POST con el objeto `product` al API
    this.http.post(this.apiURL, this.product).subscribe(
      () => {
        alert('Producto registrado exitosamente');
        // Actualizar los productos locales
        this.productService.addProduct(this.product);
        this.products = this.productService.getProducts();
        this.closeModalAgregarTaza();
      },
      (error) => {
        console.error('Error al registrar el producto:', error);
        alert('Error al registrar el producto');
      }
    );
  }

  onClickEliminar(productId: number) {
    // Realizar una solicitud DELETE
    this.http.delete(this.apiURL + '/' + productId).subscribe(
      () => {
        alert('Producto eliminado exitosamente');

        // Actualizar los pedidos locales
        this.productService.removeProduct(productId);
        this.products = this.productService.getProducts();
      },
      (error) => {
        console.error('Error al eliminar el producto:', error);
        alert('Error al eliminar el producto');
      }
    );
  }

  onClickActivar(productId: number) {
    // Realizar una solicitud DELETE
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.existe = true;
    }

    this.http.put(this.apiURL, product).subscribe(
      () => {
        alert('Producto activado exitosamente');

        // Actualizar los pedidos locales
        this.productService.activateProduct(productId);
        this.products = this.productService.getProducts();
      },
      (error) => {
        console.error('Error al activar el producto:', error);
        alert('Error al activar el producto');
      }
    );
  }
}
