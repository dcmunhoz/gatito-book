import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _authService: AutenticacaoService;

  public usuario = '';
  public senha = '';

  constructor(authService: AutenticacaoService) { 

    this._authService = authService;

  }

  ngOnInit(): void {
  }

  login(){
    this._authService.autenticar(this.usuario, this.senha).subscribe(() => {
      console.log("Usuário autenticado com sucesso !!");
    }, (error) => {
      alert("Usuário ou senha invalidos !");
      console.error(error);
    });
  }

}
