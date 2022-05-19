import { Component, OnInit } from '@angular/core';
import { IActivity, IType, types } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: IActivity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getAll().subscribe({
      next: (data: IActivity[]): void => {
        this.activities = data;
      },
    });
  }

  getActivityByKey(key: number): void {
    this.activityService.getActivityByKey(key);
  }
}