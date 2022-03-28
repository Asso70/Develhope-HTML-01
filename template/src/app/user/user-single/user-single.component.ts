import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IUser} from 'src/app/model/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user!: IUser;
  @Output() deleted: EventEmitter<IUser> = new EventEmitter<IUser>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(user: IUser) {
    this.deleted.emit(user);
  }
}