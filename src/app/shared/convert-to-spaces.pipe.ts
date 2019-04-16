import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    // transform(value: any, ...args: any[]) {
    //    return 
    // }

    transform (value : string, character : string) : string {
        return value.replace(character, '');
    }

}