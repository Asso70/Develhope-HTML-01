import { Pipe, PipeTransform } from "@angular/core";
import { IType, types } from "../model/Activity";

@Pipe({name: "typeDescr"})
export class TypeDescrPipe implements PipeTransform {

  transform(value: string): string {
    return types.find((item: IType) => item.id === value)?.descr!;
  }
}

@Pipe({name: "typeImage"})
export class TypeImagePipe implements PipeTransform {

  transform(value: string): string {
    return types.find((item: IType) => item.id === value)?.imageHref!;
  }
}