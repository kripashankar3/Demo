import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: String[], args?: any): any {
    if(value.length == 0)
      return value;
    
      let final_arr = [];

      // value.forEach(element => {
      //   if(element.match('^.*' + args[0] + '.*$')){
      //     final_arr.push(element);
      //   }
      // });

      for (const item of value) {
        if(item.match( '^.*' + args + '.*$')){
          final_arr.push(item);
        }
      }
      return final_arr;
  }
}
