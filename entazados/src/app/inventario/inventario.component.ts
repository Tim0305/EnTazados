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
  openModal() {
    const modal: any = document.getElementById('my_modal_1');
    if (modal) {
      modal.showModal();
    }
  }

  //Fucion para cerrar el modal (pop up)
  closeModal() {
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

  openModalEditar(selectedProduct: Product) {
    const modal: any = document.getElementById('my_modal_2');
    if (modal) {
      modal.showModal();
      this.product = { ...selectedProduct };
    }
  }

  closeModalEditar() {
    const modal: any = document.getElementById('my_modal_2');
    if (modal) {
      modal.close();
    }
  }

  ngOnInit(): void {
    // Llama al servicio para obtener los productos y suscríbete al resultado
    this.productService.fetchProducts();
    this.products = this.productService.getProducts();
  }

  onClickEditar() {
    alert('Datos actualizados correctamente');
  }

  onClickAgregar() {
    // Realizar una solicitud POST con el objeto `product` al API
    this.http.post(this.apiURL, this.product).subscribe(
      () => {
        alert('Producto registrado exitosamente');
        this.product = {
          id: 0, // ID se asignará automáticamente en el servidor, puede mantenerse en 0 aquí
          nombre: '',
          descripcion: '',
          precio: 0,
          imagenUrl: '',
          cantidad: 0,
          existe: true,
        };
        this.closeModal();
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
        // Llama al servicio para obtener los productos y suscríbete al resultado
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
        // Llama al servicio para obtener los productos y suscríbete al resultado
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
