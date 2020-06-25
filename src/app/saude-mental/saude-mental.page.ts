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

  subscribe(nome, idade, saude, raca){
    this.pessoaService.insertPessoa(nome, idade, saude, raca);
  }

  buscarPorId(id){
    this.pessoaService.buscarPorId(id);
  }

  buscarPorCor(color){
    this.pessoaService.buscarPorCor(color);
  }

}
