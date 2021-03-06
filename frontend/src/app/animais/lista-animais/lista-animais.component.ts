import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais;

  constructor(private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.usuarioService.retornaUsuario().subscribe(usuario => {
    //   const userName = usuario.name ?? '';
    //   this.animaisService.listaDoUsuario(userName).subscribe(animais => {
    //     this.animais = animais;
    //     console.log(animais);
    //   });
    // });

    // this.animais$ = this.usuarioService.retornaUsuario().pipe(
    //   switchMap((usuario => {
    //     const userName = usuario.name ?? '';
    //     return this.animaisService.listaDoUsuario(userName);
    //   }))
    // );

    this.acRoute.params.subscribe(params => {
      this.animais = this.acRoute.snapshot.data['animais'];
    });
  }

}
