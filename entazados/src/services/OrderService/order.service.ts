import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../../models/Pedido.model';
import { UsuarioService } from '../UsuarioService/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private apiUrl = ''; // Endpoint de la API

  constructor(private http: HttpClient, private usuarioService:UsuarioService) {
    if(usuarioService.getRol() === 1){
      this.apiUrl = 'http://localhost:8080/compras';
    }if(usuarioService.getRol() === 2){
      this.apiUrl = 'http://localhost:8080/compras/' + usuarioService.getUsuario().id;
    }
  }

  // Obtener pedidos
  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }
}

