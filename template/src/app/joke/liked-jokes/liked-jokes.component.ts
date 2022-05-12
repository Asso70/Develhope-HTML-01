import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/model/Joke';
import { JokeService } from 'src/app/service/joke.service';

@Component({
  selector: 'app-liked-jokes',
  templateUrl: './liked-jokes.component.html',
  styleUrls: ['./liked-jokes.component.css']
})
export class LikedJokesComponent implements OnInit {
  jokes: IJoke[] = [];

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.getLikedJokes().subscribe({
      next: (data: IJoke[]) => this.jokes = data,
    });
  }
}
