import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
import { INamedAPIResource } from "../model/Pokemon";
import { PokemonService } from "../service/pokemon.service";

@Pipe({name: "translateName"})
export class NamePipe implements PipeTransform {
  constructor(private pokemonService: PokemonService) { }

  transform(namedResource: INamedAPIResource, ...priorityLangs: string[]): Observable<string> {
    if(priorityLangs) return this.pokemonService.getTranslatedName(namedResource, [...priorityLangs, ...window.navigator.languages, "en"]);
    return this.pokemonService.getTranslatedName(namedResource, [...window.navigator.languages, "en"]);
  }
}

@Pipe({name: "tameStatus"})
export class TamePipe implements PipeTransform {
  constructor(private pokemonService: PokemonService) { }

  transform(id: number): string {
    return this.pokemonService.getTameStatusById(id);  
  }
}