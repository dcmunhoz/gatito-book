import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _authService: AutenticacaoService;
  private _router: Router;

  public usuario = '';
  public senha = '';

  constructor(authService: AutenticacaoService, router: Router) { 

    this._authService = authService;
    this._router = router;
  }

  ngOnInit(): void {
  }

  login(){
    this._authService.autenticar(this.usuario, this.senha).subscribe({
      next: (n) => {
        this._router.navigate(['animais']);
        console.log("Usuário autenticado !");
      },
      error: (e) => {
        console.error(e);
        alert("Usuário ou senha invalidos");
      }
    });
  }

}
