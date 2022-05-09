import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentJokeComponent } from './joke/current-joke/current-joke.component';
import { LikeButtonComponent } from './joke/like-button/like-button.component';
import { DislikeButtonComponent } from './joke/dislike-button/dislike-button.component';
import { LikedJokesComponent } from './joke/liked-jokes/liked-jokes.component';
import { SingleJokeComponent } from './joke/single-joke/single-joke.component';
import { JokeContainerComponent } from './joke/joke-container/joke-container.component';
import { DislikedJokesComponent } from './joke/disliked-jokes/disliked-jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentJokeComponent,
    LikeButtonComponent,
    DislikeButtonComponent,
    LikedJokesComponent,
    SingleJokeComponent,
    JokeContainerComponent,
    DislikedJokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
