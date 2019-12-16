import { Component, OnInit } from '@angular/core';
//importação para utilizar o objeto terefas
import {Tarefa} from '../model/Tarefa';
//impote do serviço que irá conversar com o site
import {ListawebService} from '../service/listaweb.service'

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  //minhaTarefa: Array<Tarefa>;
  minhaTarefa:Tarefa[];

  //injetando o serviço
  constructor(private servicoLista: ListawebService) {}
  ngOnInit() {
    /*
    this.minhaTarefa = new Array<Tarefa>();
    this.minhaTarefa.push(new Tarefa("Tarefa #1", "Cleiton Marques"));
    this.minhaTarefa.push(new Tarefa("Tarefa #2", "Adrina"));
    this.minhaTarefa.push(new Tarefa("Tarefa #3", "Generosa"));
    this.minhaTarefa.push(new Tarefa("Tarefa #4", "Mayara"));
    this.minhaTarefa.push(new Tarefa("Tarefa #5", "Isidro"));
    console.log(this.minhaTarefa)
    */

    console.log("Chamando a função que recupera a lista");
    this.obterTodasAsTarefas();
    console.log("Será?");
    console.log(this.minhaTarefa);
  }

  //metodo para invocar o serviço
  public obterTodasAsTarefas(){
    this.servicoLista.obterTarefas().subscribe((resultado:Tarefa[])=>{
      this.minhaTarefa = resultado;
    });
  }

}