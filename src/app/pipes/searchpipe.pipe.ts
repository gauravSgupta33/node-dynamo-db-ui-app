import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
  transform(items: any[], cols: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText;
    return items.filter(it => {
      return JSON.stringify(it).toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });
  }
}
