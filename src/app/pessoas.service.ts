import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  pessoas = [];

  constructor(private nativeStorage: NativeStorage) { }


  insertPessoa(nome, idade, saude, raca){
    this.pessoas.push({
      id: this.pessoas.length,
      nome,
      idade,
      saude,
      raca
    });
    localStorage.setItem('pessoas', JSON.stringify(this.pessoas));
    this.nativeStorage.setItem('pessoas', JSON.stringify(this.pessoas));
    console.log(this.pessoas);
  }

  buscarPorId(id){
    console.log(this.pessoas.find(element => element.id == id));
  }

  buscarPorCor(cor){
    console.log(this.pessoas.filter(element=> element.raca==cor));
  }

}

