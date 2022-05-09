import { Component, Input, OnInit } from '@angular/core';
import { IJoke } from 'src/app/model/Joke';
import { JokeService } from 'src/app/service/joke.service';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {
  @Input() joke!: IJoke;
  @Input() remove: boolean = false;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
  }

  addLikedJoke(): void {
    if(this.remove) {
      this.jokeService.removeDislikedJoke(this.joke);
    }
    this.jokeService.addLikedJoke(this.joke);
  }
}
