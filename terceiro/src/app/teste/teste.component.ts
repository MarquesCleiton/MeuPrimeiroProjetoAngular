import { Component, OnInit } from '@angular/core';
import {User} from '../model/User'
import {UserService} from '../service/user.service'

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  usuarios:User[];
  constructor(private lista:UserService) { }

  ngOnInit() {
    console.log("TESTE")
    this.obterUsuarios();
    console.log("Funcionou?")
  }

  public obterUsuarios(){
    this.lista.obterUsuarios().subscribe((resultado:User[])=>{
      console.log(resultado);
      this.usuarios = resultado;
      console.log(this.usuarios)
    });
  }
}
