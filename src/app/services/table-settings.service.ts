import { Injectable } from "@angular/core";
import { IData, IRowsToShow } from "../types";

@Injectable({
  providedIn: 'root'
})
export class TableSettingsService {
  // TODO: отсортировать финальный обьект, чтобы сперва к примеру шел name и тд. И пусть это зависит от последоватльности в shownColumns
  public shownColumns: IRowsToShow = {
    isActive: true,
    balance: true,
    picture: true,
    age: true,
    name: true,
    company: true,
    email: true,
    address: true,
    tags: true,
    favoriteFruit: true,
  };

  public filterByShownConfig(data: IData[]): IData[] {
    const showNamesArr: string[] = [];
    for (const [key, value] of Object.entries(this.shownColumns)) {
      if (value) {
        showNamesArr.push(key);
      }
    }

    data.map((item) => {
      for (const [key] of Object.entries(item)) {
        if (!showNamesArr.includes(key)) {
          delete item[key as keyof IData];
        }
      }
    })
    return data;
  }

//     // TODO: sort by sortType
//   private sortFields(data: IData[], sortType: string): IData[] {
//     data.sort((a, b) => {
//       const nameA = a.age;
//       const nameB = b.age;
//       if (nameA < nameB) {
//         return -1;
//       }
//       if (nameA > nameB) {
//         return 1;
//       }

//       return 0;
//     });
//     return data;
//   }
}
