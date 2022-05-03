import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBeer } from 'src/app/model/Beer';
import { BeerService } from 'src/app/service/beer.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  beers: IBeer[] = [];
  beerNames: string[] = [];
  beerTypes: string[] = ["SMALL", "MEDIUM"];
  selectedBeers: IBeer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getAll().subscribe({
      next: (data: IBeer): void => {
        this.beers.push(data);
      },
    });
    this.beerNames = Array.from(new Set(this.beers.map(function(item: IBeer): string {
      return item.name;
    })));
    console.log(this.beers);
  }

  submitBeerForm(f: NgForm): void {
    this.selectedBeers = [];
    this.beers.filter(function(item: IBeer): boolean {
      return f.value.beerNames.indexOf(item.name) !== -1 && f.value.beerTypes.indexOf(item.type) !== -1;
    }).map(function(item: IBeer): number {
      return item.id;
    }).forEach((item: number) => this.beerService.getBeer(item).subscribe({
        next: (data: IBeer) => this.selectedBeers.push(data)
      },
    ));
    console.log(this.selectedBeers);
  }
}