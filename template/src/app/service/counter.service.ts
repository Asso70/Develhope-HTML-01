import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public counter$: Observable<number> = this.counterSubject.asObservable();
  
  constructor() { }

  get(): Observable<number> {
    return this.counter$;
  }

  sum(num: number = 1): void {
    this.counterSubject.next(this.counterSubject.value + num);
  }

  subtract(num: number = 1): void {
    if(num > this.counterSubject.value) {
      throw new Error("Errore: Non è possibile sottrarre più del disponibile");
    }
    this.counterSubject.next(this.counterSubject.value - num);
  }
}