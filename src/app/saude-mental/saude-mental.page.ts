import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../pessoa'
import {PessoasService} from '../pessoas.service'

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {

 
  constructor(private pessoaService:PessoasService) { 
  }

  ngOnInit() {
  }

  subscribe(name, age, health, race){
    this.pessoaService.insertPessoa(name, age, health, race);
  }

  searchForId(id){
    this.pessoaService.buscarPorId(id);
  }

  searchForColor(color){
    this.pessoaService.buscarPorCor(color);
  }

}
