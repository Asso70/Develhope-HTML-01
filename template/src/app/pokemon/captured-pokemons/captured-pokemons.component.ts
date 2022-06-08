import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/model/Pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-captured-pokemons',
  templateUrl: './captured-pokemons.component.html',
  styleUrls: ['./captured-pokemons.component.css']
})
export class CapturedPokemonsComponent implements OnInit {
  capturedPokemons: IPokemon[] = [];
  fillers: boolean [] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getCapturedPokemons().subscribe({
      next: (data: IPokemon[]): IPokemon[] => this.capturedPokemons = data,
    });
    this.pokemonService.getFillers().subscribe({
      next: (data: boolean[]): boolean[] => this.fillers = data,
    });
  }

  selectPokemon(id: number) {
    console.log("Pokemon", id);
  }
}
