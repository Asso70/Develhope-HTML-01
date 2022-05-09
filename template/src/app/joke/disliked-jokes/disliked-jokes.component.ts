import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/model/Joke';
import { JokeService } from 'src/app/service/joke.service';

@Component({
  selector: 'app-disliked-jokes',
  templateUrl: './disliked-jokes.component.html',
  styleUrls: ['./disliked-jokes.component.css']
})
export class DislikedJokesComponent implements OnInit {

  jokes: IJoke[] = [];

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.getDislikedJokes().subscribe({
      next: (data: IJoke[]) => this.jokes = data,
     });
  }
}
