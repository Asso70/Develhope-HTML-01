import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
import { IPokeType } from "../model/Pokemon";
import { PokemonService } from "../service/pokemon.service";

@Pipe({name: "translateTypeName"})
export class TypePipe implements PipeTransform {
  constructor(private pokemonService: PokemonService) { }

  transform(type: IPokeType): Observable<string> {
    return this.pokemonService.getTranslatedTypeName(type);
  }
}