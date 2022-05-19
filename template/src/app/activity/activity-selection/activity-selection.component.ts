import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { IType, types } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activity-selection',
  templateUrl: './activity-selection.component.html',
  styleUrls: ['./activity-selection.component.css']
})
export class ActivitySelectionComponent implements OnInit {
  selTypes: IType[] = types;
  actSelectForm: FormGroup = new FormGroup({
    type: new FormControl(''),
    participants: new FormControl(''),
    price: new FormControl(''),
  });
  error: string = "";

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getError().subscribe({
      next: (data: string) => this.error = data,
    })
  }

  get price(): number {
    return this.actSelectForm.get("price")?.value;
  }

  onSubmit(): void {
    this.activityService.getActivity(this.actSelectForm);
  }
}