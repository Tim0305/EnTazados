import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
   selector: 'app-catalogo',
   templateUrl: './catalogo.component.html',
   styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
   public productos: any[] = [];

   constructor(private productService: ProductoService) { }

   ngOnInit(): void {
      // Llamar al servicio para obtener los productos desde la API
      this.productService.getProducts().subscribe(
         (response) => {
            this.productos = response; // Asignar la respuesta de la API a la variable 'productos'
         },
         (error) => {
            console.error('Error al obtener los productos:', error); // Manejo de errores
         }
      );
   }
}
