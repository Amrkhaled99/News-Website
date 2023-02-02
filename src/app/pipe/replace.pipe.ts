import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(txt:string): string {
    return txt.slice(0, txt.indexOf('-'));
  }

}
