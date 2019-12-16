import { Component, OnInit } from '@angular/core';
//importação para utilizar o objeto terefas
import {Tarefa} from '../model/Tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  minhaTarefa: Array<Tarefa>;
  constructor() { 

  }

  ngOnInit() {
    this.minhaTarefa = new Array<Tarefa>();

    this.minhaTarefa.push(new Tarefa("Tarefa #1", "Cleiton Marques"));
    this.minhaTarefa.push(new Tarefa("Tarefa #2", "Adrina"));
    this.minhaTarefa.push(new Tarefa("Tarefa #3", "Generosa"));
    this.minhaTarefa.push(new Tarefa("Tarefa #4", "Mayara"));
    this.minhaTarefa.push(new Tarefa("Tarefa #5", "Isidro"));
    console.log(this.minhaTarefa)
  }

}