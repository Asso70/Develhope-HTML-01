import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/model/Joke';
import { JokeService } from 'src/app/service/joke.service';

@Component({
  selector: 'app-joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.css']
})
export class JokeContainerComponent implements OnInit {
  likedJokes: IJoke[] = [];
  dislikedJokes: IJoke[] = [];

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.getLikedJokes().subscribe({
      next: (data: IJoke[]) => this.likedJokes = data,
    });
  }
}