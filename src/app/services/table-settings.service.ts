import { Injectable } from "@angular/core";
import { IData, IRowsToShow } from "../types";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TableSettingsService {
  private shownColumns: IRowsToShow = {
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
  public shownColumns$ = new BehaviorSubject<IRowsToShow>(this.shownColumns);

  public setShownColumns(newShownColumnsArr: IRowsToShow) {
    this.shownColumns$.next(newShownColumnsArr);
  }

  public filterByShownConfig(data: IData[]): IData[] {
    const dataDeepCopy = structuredClone(data);
    const showNamesArr: string[] = [];
    for (const [key, value] of Object.entries(this.shownColumns$.value)) {
      if (value) {
        showNamesArr.push(key);
      }
    }

    dataDeepCopy.map((item) => {
      for (const [key] of Object.entries(item)) {
        if (!showNamesArr.includes(key)) {
          delete item[key as keyof IData];
        }
      }
    })
    return dataDeepCopy;
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
