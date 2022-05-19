import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitySelectionComponent } from './activity/activity-selection/activity-selection.component';
import { ActivityListComponent } from './activity/activity-list/activity-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TypeDescrPipe, TypeImagePipe } from './pipe/TypePipe';
import { PricePipe } from './pipe/PricePipe';
import { ActivityDetailComponent } from './activity/activity-detail/activity-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitySelectionComponent,
    ActivityListComponent,
    TypeDescrPipe,
    PricePipe,
    TypeImagePipe,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
