import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/model/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user: IUser = {id: 0};
  @Output() selectedUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  @Output() show: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(user: IUser): void {
    this.selectedUser.emit(user);
    this.show.emit(true);
  }
}
