import { Pipe, PipeTransform } from "@angular/core";
import { PokemonService } from "../service/pokemon.service";

@Pipe({name: "tameStatus"})
export class TamePipe implements PipeTransform {
  constructor(private pokemonService: PokemonService) { }

  transform(id: number): string {
    return this.pokemonService.getTameStatusById(id);  
  }
}