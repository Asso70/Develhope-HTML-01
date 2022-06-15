import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonHomeComponent } from './pokemon/pokemon-home/pokemon-home.component';
import { CurrentPokemonComponent } from './pokemon/current-pokemon/current-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { NamePipe, TamePipe } from './pipe/PokemonPipe';
import { RejectedPokemonsComponent } from './pokemon/rejected-pokemons/rejected-pokemons.component';
import { CapturedPokemonsComponent } from './pokemon/captured-pokemons/captured-pokemons.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHomeComponent,
    CurrentPokemonComponent,
    NamePipe,
    TamePipe,
    RejectedPokemonsComponent,
    CapturedPokemonsComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
