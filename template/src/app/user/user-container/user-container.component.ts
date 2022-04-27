import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/User';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  users: IUser[] = [{id: 1}, {id: 2}, {id: 3}];
  selectedUser: IUser = {id: 0};
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedUser(user: IUser) {
    this.selectedUser = user;
  }

  setHidden(show: boolean) {
    this.show = show;
  }
}
