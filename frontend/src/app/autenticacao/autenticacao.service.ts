import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private _api: HttpClient;

  constructor( 
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
   ) { 
    
    this._api = httpClient;

  }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this._api.post("http://localhost:3000/user/login", {
      userName: usuario,
      password: senha
    }, {
      observe: 'response'
    }).pipe(
      tap((response) => {
        const authToken = response.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
