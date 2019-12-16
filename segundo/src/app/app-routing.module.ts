import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from './home/home.component';
import{TarefaComponent} from './tarefa/tarefa.component';
import{BuscaComponent} from './busca/busca.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'tarefa', component: TarefaComponent},
  {path:'busca', component: BuscaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
