import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ProductoService {
   private apiUrl = 'http://localhost:8080/tazas';

   constructor(private http: HttpClient) { }

   getProducts(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
   }
}