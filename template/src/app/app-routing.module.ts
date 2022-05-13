import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitySelectionComponent } from './activity/activity-selection/activity-selection.component';

const routes: Routes = [
  {path: "activity", component: ActivitySelectionComponent},
  {path: "", redirectTo: "/activity", pathMatch: "full"},
  {path: "**", redirectTo: "/activity"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
