import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "priceLevel"})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    if(value > 0 && value <= 0.5) return "Basso";
    else if(value > 0.5 && value < 1) return "Medio";
    else if(value > 1) return "Alto";
    return "Gratis";
  }
}