import { Injectable } from '@angular/core';
import { concatMap, interval, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IJoke } from '../model/Joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  startJokes(): Observable<IJoke> {
    return interval(5000).pipe(concatMap<number, Observable<IJoke>>((num: number): Observable<IJoke> => {
      return this.httpClient.get<IJoke>("https://v2.jokeapi.dev/joke/any", {responseType: "json"});
    })
  )}
}
