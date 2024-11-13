import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/Product.model';
import { FormsModule } from '@angular/forms';

@Component({
   selector: 'app-agregar-producto',
   standalone: true,
   imports: [FormsModule],
   templateUrl: './agregar-producto.component.html',
   styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
   private apiURL = 'http://localhost:8080/tazas'; // URL de la API

   // Propiedades para el nuevo producto
   product: Product = {
      id: 0, // ID se asignará automáticamente en el servidor, puede mantenerse en 0 aquí
      nombre: '',
      descripcion: '',
      precio: 0,
      imagenUrl: '',
      cantidad: 0
   };

   constructor(private http: HttpClient) {}

   onClickAgregar() {
      // Realizar una solicitud POST con el objeto `product` al API
      this.http.post(this.apiURL, this.product).subscribe(
         () => {
            alert('Producto registrado exitosamente');
            // Aquí puedes limpiar el formulario o mostrar un mensaje de éxito si es necesario
            this.product = {
               id: 0, // ID se asignará automáticamente en el servidor, puede mantenerse en 0 aquí
               nombre: '',
               descripcion: '',
               precio: 0,
               imagenUrl: '',
               cantidad: 0
            };

         },
         (error) => {
            console.error('Error al registrar el producto:', error);
            alert("Error al registrar el producto");
         }
      );
   }
}
