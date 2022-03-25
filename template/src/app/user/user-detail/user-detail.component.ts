import {Component, OnInit} from '@angular/core';
import {IEmployee, Employee, Address, Company, Role, Gender} from 'src/app/models/Employee';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  employee: IEmployee = new Employee(3487, "Mario", "Rossi", 30, new Date("1955/12/14"), new Address("Rome", "Via Roma 10", "0010"), Role.STAFF, "MarioRossi80",
  new URL("https://bit.ly/3yRngEP"), [new Company(148979, "Develhope", "La migliore", new Address("Palermo", "Via Libertà 58", "90139")), new Company(123123, "Apple",
  "E insomma...", new Address("Cupertino", "One Apple Park Way", "95014"))], Gender.MALE);

  constructor() { }

  ngOnInit(): void {
  }

}
