import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from 'src/app/model/Pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon!: IPokemon;
  tameStatus!: string;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: ({id}) => this.pokemonService.getPokemonById(id),
    });
    this.pokemonService.getDetailPokemon().subscribe({
      next: (data: IPokemon) => {
        this.pokemon = data;
        this.tameStatus = this.pokemonService.getTameStatusById(data.id);
      },
    });
  }
}
