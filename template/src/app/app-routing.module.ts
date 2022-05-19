import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailComponent } from './activity/activity-detail/activity-detail.component';
import { ActivityListComponent } from './activity/activity-list/activity-list.component';
import { ActivitySelectionComponent } from './activity/activity-selection/activity-selection.component';

const routes: Routes = [
  {path: "activity", component: ActivitySelectionComponent},
  {path: "activity/list", component: ActivityListComponent},
  {path: "activity/detail/:id", component: ActivityDetailComponent},
  {path: "", redirectTo: "activity", pathMatch: "full"},
  {path: "**", redirectTo: "activity"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }