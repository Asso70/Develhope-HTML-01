import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/model/Joke';

@Component({
  selector: 'app-joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.css']
})
export class JokeContainerComponent implements OnInit {
  likedJokes: IJoke[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
