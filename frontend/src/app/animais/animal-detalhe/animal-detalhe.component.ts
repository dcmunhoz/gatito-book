import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-animal-detalhe',
  templateUrl: './animal-detalhe.component.html',
  styleUrls: ['./animal-detalhe.component.css']
})
export class AnimalDetalheComponent implements OnInit {

  public animalId: number = 0;
  public animal$: Observable<Animal> = new Observable<Animal>();
  
  constructor( private animalService: AnimaisService, private acRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.animalId = this.acRoute.snapshot.params['animalId'];
    this.animal$ = this.animalService.buscaPorId(this.animalId);
  }

  curtir(){
    this.animalService.curtir(this.animalId).subscribe((curtida) => {
      if (curtida) {
        this.animal$ = this.animalService.buscaPorId(this.animalId);
      }
    })
  }

  excluir(){
    this.animalService.excluiAnimal(this.animalId).subscribe(()=>{
      this.router.navigate(['/animais'])
    }, (error) => {
      console.log(error)
    });
  }
}
