import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IType, types } from 'src/app/model/Activity';

@Component({
  selector: 'app-activity-selection',
  templateUrl: './activity-selection.component.html',
  styleUrls: ['./activity-selection.component.css']
})
export class ActivitySelectionComponent implements OnInit {
  selTypes: IType[] = types;

  constructor() { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
 
  }
}
