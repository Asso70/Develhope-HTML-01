import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/model/Pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-rejected-pokemons',
  templateUrl: './rejected-pokemons.component.html',
  styleUrls: ['./rejected-pokemons.component.css']
})
export class RejectedPokemonsComponent implements OnInit {
  rejectedPokemons: IPokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getRejectedPokemons().subscribe({
      next: (data: IPokemon[]): IPokemon[] => this.rejectedPokemons = data,
    });
  }
}
