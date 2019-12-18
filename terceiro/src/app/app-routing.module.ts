import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TesteComponent} from './teste/teste.component';
import { HomeComponent }  from './home/home.component';
import {ListaComponent} from './lista/lista.component';
import { BuscaComponent } from './busca/busca.component';
import { TarefasComponent } from './tarefas/tarefas.component';
const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'lista', component:ListaComponent},
  {path:'busca', component:BuscaComponent},
  {path:'tarefas', component:TarefasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
