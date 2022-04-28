import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  @Output() modCounter: EventEmitter<number> = new EventEmitter<number>();
  @Output() chkError: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private counterServ: CounterService) { }

  ngOnInit(): void {
  }

  sum(num: number): void {
    if(num < 0) {
      this.subtract(-1 * num);
      return;
    }
    this.counterServ.sum(num);
    this.modCounter.emit(this.counterServ.getCounter());
    this.chkError.emit(false);
  }

  subtract(num: number): void {
    this.chkError.emit(this.counterServ.subtract(num));
    this.modCounter.emit(this.counterServ.getCounter());
  }
}
