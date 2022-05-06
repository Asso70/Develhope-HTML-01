import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
  @Output() addCounter: EventEmitter<number> = new EventEmitter<number>();
  @Output() substractCounter: EventEmitter<number> = new EventEmitter<number>();

  public editInput = this.fb.control(1);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}