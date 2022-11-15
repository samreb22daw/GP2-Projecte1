import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "percentatge"
})
export class PipePersonalitzada implements PipeTransform {
    transform(value: number, args?: any):any {
        let valuePercent = value.toFixed(2).toString();
        return valuePercent + " %";
    }
}

@Pipe({
    name: "dolars"
})
export class PipePersonalitzada2 implements PipeTransform {
    transform(value: number, args?: any):any {
        let valuePercent = value.toFixed(2).toString();
        return valuePercent + " $";
    }
}