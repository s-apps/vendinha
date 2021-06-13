import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from './compra';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(
    private http: HttpClient
  ) { }

  read(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/compras');
  }

  delete(compra_id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/compras/delete', {
      params: new HttpParams().set('compra_id', compra_id)
    });
  }

  create(formCompra: Compra): Observable<Compra> {
    return this.http.post<Compra>('http://localhost:3000/compras', formCompra);
  }

}
