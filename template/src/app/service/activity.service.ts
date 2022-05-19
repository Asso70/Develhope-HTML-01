import { Injectable } from '@angular/core';
import { IActivity } from '../model/Activity';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private numRetries: number = 0;
  private activitiesSubj: BehaviorSubject<IActivity[]> = new BehaviorSubject<IActivity[]>([]);
  private errorSubj: Subject<string> = new Subject<string>();
  private activitySubj: BehaviorSubject<Partial<IActivity>> = new BehaviorSubject<Partial<IActivity>>({});
  activities$: Observable<IActivity[]> = this.activitiesSubj.asObservable();
  error$: Observable<string> = this.errorSubj.asObservable();
  activity$: Observable<Partial<IActivity>> = this.activitySubj.asObservable();
  activities: IActivity[] = [];

  constructor(private httpClient: HttpClient, private router: Router) { }

  getActivity(form: FormGroup): void {
    console.log(form);
    if(this.numRetries >= 10) {
      this.numRetries = 0;
      this.errorSubj.next("Trovate solo attività doppioni");
      return;
    }
    if(form.value.participants === null) form.value.participants = "";
    this.httpClient.get<IActivity>("http://www.boredapi.com/api/activity", {params: {...form.value}, responseType: "json"}).subscribe({
      next: (activity: IActivity): void => {
        if(!activity.activity) {
          this.numRetries = 0;
          this.errorSubj.next("Non è stata trovata alcuna attività coi parametri richiesti");
          return;
        }
        else if(this.activities.length > 0 && this.activities.findIndex((item: IActivity) => item.key === activity.key) != -1) {
          this.numRetries = this.numRetries + 1;
          this.getActivity(form);
          return;
        }
        this.activities.push(activity);
        this.numRetries = 0;
        this.errorSubj.next("");
        this.router.navigateByUrl("/activity/list");
        this.activitiesSubj.next(this.activities.slice());
      },
      error: (err: Error): void => {
        this.numRetries = 0;
        this.errorSubj.next(err.message);
      },
    });
  }

  getAll(): Observable<IActivity[]> {
    return this.activities$;
  }

  getError(): Observable<string> {
    return this.error$;
  }

  getActivityByKey(key: number): void {
    const activity: IActivity | undefined = this.activities.find((item: IActivity) => item.key === key);
    if(activity !== undefined) this.activitySubj.next(activity);
    else {
      this.httpClient.get<IActivity>("http://www.boredapi.com/api/activity", {params: {key: key}}).subscribe({
        next: (activity: IActivity): void => {
          this.activitySubj.next(activity);
        },
      });
    }
    this.router.navigateByUrl(`/activity/detail/${key}`);
  }

  getSingle(): Observable<Partial<IActivity>> {
    return this.activity$;
  }
}