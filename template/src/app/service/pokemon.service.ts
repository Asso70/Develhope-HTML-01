import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, Observable, of, Subject } from 'rxjs';
import { IPokemon, IPokeType, ITranslation, IType, Pokemon } from '../model/Pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private randomPokemonSubject: BehaviorSubject<IPokemon> = new BehaviorSubject<IPokemon>(new Pokemon());
  randomPokemon$: Observable<IPokemon> = this.randomPokemonSubject.asObservable();
  private capturedPokemonsSubject: Subject<IPokemon[]> = new Subject<IPokemon[]>();
  capturedPokemons$: Observable<IPokemon[]> = this.capturedPokemonsSubject.asObservable();
  private capturedPokemons: IPokemon[] = [];
  private rejectedPokemonsSubject: Subject<IPokemon[]> = new Subject<IPokemon[]>();
  rejectedPokemons$: Observable<IPokemon[]> = this.rejectedPokemonsSubject.asObservable();
  private rejectedPokemons: IPokemon[] = [];
  private fillers: boolean[] = new Array<boolean>(6);
  private fillerSubject: BehaviorSubject<boolean[]> = new BehaviorSubject<boolean[]>(this.fillers);
  fillers$: Observable<boolean[]> = this.fillerSubject.asObservable();
  private MIN_POKEMON_ID: number = 1;
//  private MAX_POKEMON_ID: number = 898;
  private MAX_POKEMON_ID: number = 2;
  private detailPokemonSubject: BehaviorSubject<IPokemon> = new BehaviorSubject<IPokemon>(new Pokemon());
  detailPokemon$: Observable<IPokemon> = this.detailPokemonSubject.asObservable();
  private lastPokemon: IPokemon = new Pokemon();

  constructor(private httpClient: HttpClient) { }

  emitRandomPokemon(): void {
    const id: number = Math.floor(Math.random() * (this.MAX_POKEMON_ID - this.MIN_POKEMON_ID + 1) + this.MIN_POKEMON_ID);
    const lastPokemonId: number = this.randomPokemonSubject.value.id;
    this.httpClient.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe({
      next: (pokemon: IPokemon): void => {
        if(pokemon.id === lastPokemonId) this.emitRandomPokemon();
        else this.randomPokemonSubject.next({...pokemon });
      },
    });
  }

  addCapturedPokemon(pokemon: IPokemon): void {
    this.removeRejectedPokemon(pokemon);
    if(this.capturedPokemons.find((ele: IPokemon) => ele.id === pokemon.id)) {
      this.emitRandomPokemon();
      return;
    }
    this.capturedPokemons.push(pokemon);
    this.capturedPokemonsSubject.next(this.capturedPokemons.slice());
    this.fillers.pop();
    this.fillerSubject.next(this.fillers.slice());
    this.emitRandomPokemon();
  }

  addRejectedPokemon(pokemon: IPokemon): void {
    this.removeCapturedPokemon(pokemon);
    if(this.rejectedPokemons.find((ele: IPokemon) => ele.id === pokemon.id)) {
      this.emitRandomPokemon();
      return;
    }
    this.rejectedPokemons.push(pokemon);
    this.rejectedPokemonsSubject.next(this.rejectedPokemons.slice());
    this.emitRandomPokemon();
  }

  removeCapturedPokemon(pokemon: IPokemon): void {
    const i: number = this.capturedPokemons.findIndex((ele: IPokemon) => ele.id === pokemon.id);
    if(i < 0) return;
    this.capturedPokemons.splice(i, 1);
    this.capturedPokemonsSubject.next(this.capturedPokemons.slice());
    this.fillers.push(true);
    this.fillerSubject.next(this.fillers.slice());
  }

  removeRejectedPokemon(pokemon: IPokemon): void {
    const i: number = this.rejectedPokemons.findIndex((ele: IPokemon) => ele.id === pokemon.id);
    if(i < 0) return;
    this.rejectedPokemons.splice(i, 1);
    this.rejectedPokemonsSubject.next(this.rejectedPokemons.slice());
  }

  getRandomPokemon(): Observable<IPokemon> {
    return this.randomPokemon$;
  }

  getCapturedPokemons(): Observable<IPokemon[]> {
    return this.capturedPokemons$;
  }
  
  getRejectedPokemons(): Observable<IPokemon[]> {
    return this.rejectedPokemons$;
  }

  getFillers(): Observable<boolean[]> {
    return this.fillers$;
  }

  getTameStatusById(id: number): string {
    const i: number = this.capturedPokemons.findIndex((ele: IPokemon) => ele.id === id);
    if(i >= 0) return "addomesticato";
    else if(i < 0) return "selvatico";
    return "selvatico";
  }

  getTranslatedTypeName(pokeType: IPokeType): Observable<string> {
    return this.httpClient.get<IType>(pokeType.type.url, {responseType: "json"}).pipe(concatMap<IType, Observable<string>>((type: IType): Observable<string> => {
      let i: number = type.names.findIndex((ele: ITranslation) => ele.language.name === "it");
      if(i >= 0) return of(type.names[i].name);
      i = type.names.findIndex((ele: ITranslation) => ele.language.name === "en");
      if(i >= 0) return of(type.names[i].name);
      return of(pokeType.type.name);
    }));
  }

  get capturedPokemonsLength(): number {
    return this.capturedPokemons.length;
  }

  getPokemonById(id: number): void {
    const pokemon: IPokemon | undefined = this.capturedPokemons.concat(this.rejectedPokemons).find((item: Partial<IPokemon>) => item.id === id);
    if(pokemon !== undefined) this.detailPokemonSubject.next(pokemon);
    else {
      this.httpClient.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe({
        next: (pokemon: IPokemon): void => {
          this.detailPokemonSubject.next(pokemon);
        },
      });
    }
  }

  getDetailPokemon(): Observable<IPokemon> {
    return this.detailPokemon$;
  }
}