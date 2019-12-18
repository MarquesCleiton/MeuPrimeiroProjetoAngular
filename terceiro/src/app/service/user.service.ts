import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //injeção de depêndencia
  constructor(private http: HttpClient) { }
  
  public obterUsuarios(): any {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  public listaDeTarefasCompleta(): any{
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
  public listaDeTarefasId(id:number): any{
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
