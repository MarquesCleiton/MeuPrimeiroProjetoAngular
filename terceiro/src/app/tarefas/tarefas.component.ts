import { Component, OnInit } from '@angular/core';

import { Tarefa } from '../model/Tarefa';
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  listaTarefas: Tarefa[];
  tarefa: Tarefa;
  idBusca: number = null;
  isLista: boolean = true;

  constructor(private lista: UserService) { }

  ngOnInit() {
    if (this.isLista) {
      this.lista.listaDeTarefasCompleta().subscribe((resultado: Tarefa[]) => {
        console.log(resultado);
        this.listaTarefas = resultado;
        console.log(this.listaTarefas)
      });
    }
  }

  obterListaCompleta() {
    if (this.idBusca > 0) {
      this.lista.listaDeTarefasId(this.idBusca).subscribe((resultado: Tarefa) => {
        this.tarefa = resultado;
        console.log("Tarefa: ")
        console.log(this.tarefa)
        this.isLista = false;
      });
    } else {
      this.lista.listaDeTarefasCompleta().subscribe((resultado: Tarefa[]) => {
        this.listaTarefas = resultado;
        console.log("Lista: ")
        console.log(this.listaTarefas)
        this.isLista = true;
      });
    }
  }
}
