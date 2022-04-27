import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: IUser[] = [];
  @Output() selectedUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  @Output() show: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  selectUser(user: IUser): void {
    this.selectedUser.emit(user);
  }

  setHidden(show: boolean): void {
    this.show.emit(show);
  }
}
