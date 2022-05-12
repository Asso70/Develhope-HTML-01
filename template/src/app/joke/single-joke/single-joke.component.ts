import { Component, Input, OnInit } from '@angular/core';
import { IJoke } from 'src/app/model/Joke';

@Component({
  selector: 'app-single-joke',
  templateUrl: './single-joke.component.html',
  styleUrls: ['./single-joke.component.css']
})
export class SingleJokeComponent implements OnInit {
  @Input() joke!: IJoke;

  constructor() { }

  ngOnInit(): void { }
}
