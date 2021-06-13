import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from './conta';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(
    private http: HttpClient
  ) { }

  create(formConta: Conta): Observable<Conta> {
    return this.http.post<Conta>('http://localhost:3000/contas', formConta);
  }

  read(size: number, page: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/contas', {
      params: new HttpParams().set('size', size.toString()).set('page', page.toString())
    });
  }

  edit(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/contas/edit', {
      params: new HttpParams().set('id', id)
    });
  }

  readContas(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/contas/read')
  }

  update(formConta: Conta): Observable<any> {
    return this.http.put<Conta>('http://localhost:3000/contas/update', formConta);
  }

  delete(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/contas/delete', {
      params: new HttpParams().set('id', id)
    });
  }

  filter(nome: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/contas/filter', {
      params: new HttpParams().set('nome', nome)
    });
  }
}
