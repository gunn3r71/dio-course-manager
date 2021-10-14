import { Pipe, PipeTransform } from "@angular/core";
//Estudar mais sobre
@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform{
    transform(value: string, oldValue:string, valueToReplace:string): string {
        return value.replace(oldValue, valueToReplace);
    }
}