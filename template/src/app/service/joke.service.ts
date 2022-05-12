import { Injectable } from '@angular/core';
import { concatMap, interval, map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IJoke } from '../model/Joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  likedJokes: IJoke[] = [];
  dislikedJokes: IJoke[] = [];
  private likedJokeSubject: Subject<IJoke[]> = new Subject<IJoke[]>();
  likedJokes$ = this.likedJokeSubject.asObservable();
  private dislikedJokeSubject: Subject<IJoke[]> = new Subject<IJoke[]>();
  dislikedJokes$ = this.dislikedJokeSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  startJokes(): Observable<IJoke> {
    return interval(5000).pipe(concatMap<number, Observable<IJoke>>((num: number): Observable<IJoke> => {
      return this.httpClient.get<IJoke>("https://v2.jokeapi.dev/joke/Any", {responseType: "json"});
    })
  )}

  addLikedJoke(joke: IJoke): void {
    if(this.likedJokes.find((ele: IJoke) => ele.id === joke.id)) {
      return;
    }
    this.likedJokes.push(joke);
    this.likedJokeSubject.next(this.likedJokes.slice());
  }

  getLikedJokes(): Observable<IJoke[]> {
    return this.likedJokes$;
  }

  removeLikedJoke(joke: IJoke): void {
    const i: number = this.likedJokes.findIndex((ele: IJoke) => ele.id === joke.id);
    if(i >= 0) {
      this.likedJokes.splice(i, 1);
    }
    this.likedJokeSubject.next(this.likedJokes.slice());
  }

  addDislikedJoke(joke: IJoke): void {
    if(this.dislikedJokes.find((ele: IJoke) => ele.id === joke.id)) {
      return;
    }
    this.dislikedJokes.push(joke);
    this.dislikedJokeSubject.next(this.dislikedJokes.slice());
  }

  getDislikedJokes(): Observable<IJoke[]> {
    return this.dislikedJokes$;
  }

  removeDislikedJoke(joke: IJoke): void {
    const i: number = this.dislikedJokes.findIndex((ele: IJoke) => ele.id === joke.id);
    if(i >= 0) {
      this.dislikedJokes.splice(i, 1);
    }
    this.dislikedJokeSubject.next(this.dislikedJokes.slice());
  }
}