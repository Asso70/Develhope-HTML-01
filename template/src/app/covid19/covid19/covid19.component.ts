import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/service/covid19.service';
import { CovidRoute, ICovidRoute } from 'src/app/model/Route';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  numProp: number = 0;
  props: string[] = [];
  obj: Object = {};
  covidRoutes: ICovidRoute[] = [];

  constructor(private covid19Service: Covid19Service) { }

  ngOnInit(): void {
  
    this.covid19Service.getAll().subscribe({
      next: (data: Object): void => {
        this.numProp = Object.keys(data).length;
        this.props = Object.keys(data);
        this.obj = data;

        for(const[key, value] of Object.entries(data)) {
          this.covidRoutes.push(new CovidRoute(key, value));
        }
      },
    });
  }
}