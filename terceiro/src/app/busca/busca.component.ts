import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  private idBusca: number;
  constructor() { }

  ngOnInit() {
  }

  public pesquisar() {
    if (this.idBusca <= 0) {
      alert("-1");
    }
    console.log("BUTÃO APERTADO!");
    console.log("Valor do id: " + this.idBusca);
  }

}
