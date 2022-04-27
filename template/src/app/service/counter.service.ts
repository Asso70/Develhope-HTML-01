import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;
  constructor() { }

  getCounter(): number {
    return this.counter;
  }

  sum(num: number = 1): void {
    this.counter = this.counter + num;
    console.log(this.counter);
  }

  subtract(num: number = 1): void {
    if(num > this.counter) {
      console.log("Errore: Non è possibile sottrarre più del disponibile");
      return;
    }
    this.counter = this.counter - num;
    console.log(this.counter);
  }
}