import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonHomeComponent } from './pokemon/pokemon-home/pokemon-home.component';

const routes: Routes = [
  {path: "home", component: PokemonHomeComponent},
  {path: "pokemon/detail/:id", component: PokemonDetailComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
