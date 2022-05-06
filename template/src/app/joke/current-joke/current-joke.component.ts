import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IJoke } from 'src/app/model/Joke';
import { JokeService } from 'src/app/service/joke.service';

@Component({
  selector: 'app-current-joke',
  templateUrl: './current-joke.component.html',
  styleUrls: ['./current-joke.component.css']
})
export class CurrentJokeComponent implements OnInit {
  joke!: IJoke;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.startJokes().subscribe({
      next: (joke: IJoke): void => {
        this.joke = joke;
        console.log(this.joke);
      },
    });
  }
}