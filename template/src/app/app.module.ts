import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCounterComponent } from './counter/show-counter/show-counter.component';
import { EditCounterComponent } from './counter/edit-counter/edit-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCounterComponent,
    EditCounterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }