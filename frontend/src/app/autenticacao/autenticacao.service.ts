import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private _api: HttpClient;

  constructor( httpClient: HttpClient ) { 
    
    this._api = httpClient;

  }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this._api.post("http://localhost:3000/user/login", {
      userName: usuario,
      password: senha
    })
  }
}
