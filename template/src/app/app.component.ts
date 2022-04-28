import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';
  counter: number = 0;
  error: boolean = false;

  setCounter(counter: number): void {
    this.counter = counter;
  }

  setError(error: boolean): void {
    this.error = error;
  }
}