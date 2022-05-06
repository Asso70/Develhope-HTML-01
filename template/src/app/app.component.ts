import { Component, OnInit } from '@angular/core';
import { CounterService } from './service/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'template';
  counter: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.get().subscribe((counter) => (this.counter = counter));
  }

  add(counter: number): void {
    this.counterService.sum(counter);
  }

  substract(counter: number): void {
    this.counterService.subtract(counter);
  }
}