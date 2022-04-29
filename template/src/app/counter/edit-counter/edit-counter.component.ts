import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import { catchError, Observable, Observer, Subscription } from 'rxjs';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  @Output() modCounter: EventEmitter<number> = new EventEmitter<number>();
  @Output() chkError: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.get().subscribe({
      next: (data: number): void => { //EEEEVVIVA LE FRECEEEEEEEEEEE!!!!!
        this.modCounter.emit(data);
        this.chkError.emit(false);
      }
    });
  }

  sum(num: number): void {
    if(num < 0) {
      this.subtract(-1 * num);
      return;
    }
    this.counterService.sum(num);
  }

  subtract(num: number): void {
    try {
      this.counterService.subtract(num);
    }
    catch(error) {
      this.chkError.emit(true);
    }
  }
}