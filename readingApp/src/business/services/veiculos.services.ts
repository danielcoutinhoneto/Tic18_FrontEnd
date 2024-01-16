import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<any> {
    return this.http.get('/assets/veiculos.json');
  }
}
