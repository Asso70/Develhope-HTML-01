import { Component, Input, OnInit } from '@angular/core';
import { IJoke } from 'src/app/model/Joke';
import { JokeService } from 'src/app/service/joke.service';

@Component({
  selector: 'app-dislike-button',
  templateUrl: './dislike-button.component.html',
  styleUrls: ['./dislike-button.component.css']
})
export class DislikeButtonComponent implements OnInit {
  @Input() joke!: IJoke;
  @Input() remove: boolean = false;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
  }

  addDislikedJoke(): void {
    if(this.remove) {
      this.jokeService.removeLikedJoke(this.joke);
    }
    this.jokeService.addDislikedJoke(this.joke);
  }
}