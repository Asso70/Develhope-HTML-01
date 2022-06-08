import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/model/Pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-current-pokemon',
  templateUrl: './current-pokemon.component.html',
  styleUrls: ['./current-pokemon.component.css']
})
export class CurrentPokemonComponent implements OnInit {
  pokemon!: IPokemon;
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getRandomPokemon().subscribe({
      next: (data: IPokemon): IPokemon => this.pokemon = data,
    });
    this.pokemonService.emitRandomPokemon();
  }

  capturePokemon(): void {
    this.pokemonService.addCapturedPokemon(this.pokemon)
  }

  rejectPokemon(): void {
    this.pokemonService.addRejectedPokemon(this.pokemon)
  }

  get capturedPokemonsLength(): number {
    return this.pokemonService.capturedPokemonsLength;
  }
}