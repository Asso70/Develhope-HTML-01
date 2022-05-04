import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  private covid19: Object = {};

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Object> {
    return this.httpClient.get("https://api.covid19api.com/", {responseType: "json"});
  }
}