import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IActivity } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  activity!: Partial<IActivity>;

  constructor(private activatedRoute: ActivatedRoute, private activityService: ActivityService) { }

  ngOnInit(): void {
    if(this.activityService.activities.length === 0) {
      this.activatedRoute.params.subscribe({
        next: ({id}) => this.activityService.getActivityByKey(id),
      });
    }
    this.activityService.getSingle().subscribe({
      next: (data: Partial<IActivity>) => this.activity = data,
    });
  }
}
