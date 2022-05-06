import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/model/Joke';

@Component({
  selector: 'app-liked-jokes',
  templateUrl: './liked-jokes.component.html',
  styleUrls: ['./liked-jokes.component.css']
})
export class LikedJokesComponent implements OnInit {
  jokes: IJoke[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
