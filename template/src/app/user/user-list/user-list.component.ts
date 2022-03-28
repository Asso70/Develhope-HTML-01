import {Component, OnInit} from '@angular/core';
import {IUser, Role, Gender} from 'src/app/model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [
    {
      id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 25,
      dateOfBirth: new Date('1995-14-12'),
      address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
      },
      role: Role.STAFF,
      username: 'MarioRossi80',
      profilePhotoUrl: new URL('https://bit.ly/3yRngEP'),
      gender: Gender.MALE
    },
    {
      id: 12312,
      name: 'Maria',
      surname: 'Rossa',
      age: 26,
      dateOfBirth: new Date('1994-10-11'),
      address: {
        city: 'Palermo',
        street: 'Via Palermo 10',
        postalCode: '90100'
      },
      role: Role.MANAGER,
      username: 'MariaRossa94',
      profilePhotoUrl: new URL('https://bit.ly/3DWWxuj'),
      gender: Gender.FEMALE
    },
    {
      id: 45645,
      name: 'Elis',
      surname: 'Miao',
      age: 5,
      dateOfBirth: new Date('2016-05-08'),
      address: {
        city: 'Palermo',
        street: 'Via Palermo 120',
        postalCode: '90100'
      },
      role: Role.ADMIN,
      username: 'ElisMiao',
      profilePhotoUrl: new URL('https://bit.ly/3zU6iH3'),
      gender: Gender.FEMALE
    }
];
  constructor() {}

  ngOnInit(): void {}

  deleteUser(user: IUser) {
    console.log(this.users.indexOf(user));
    this.users.splice(this.users.indexOf(user), 1);
  }
}
