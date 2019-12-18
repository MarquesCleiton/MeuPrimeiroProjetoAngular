import { Component, OnInit } from '@angular/core';
import { User } from '../model/User'
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: User[];
  
  constructor(private lista: UserService) { }

  ngOnInit() {
    this.obterUsuarios();
  }

  public obterUsuarios() {
    
    this.lista.obterUsuarios().subscribe((resultado: User[]) => {
      console.log(resultado);
      this.usuarios = resultado;
      console.log(this.usuarios)
    });


  }

}
