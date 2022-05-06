import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  @Input() counter!: number;

  constructor() { }

  ngOnInit(): void {
  }

}