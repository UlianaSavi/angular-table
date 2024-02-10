import { Injectable } from "@angular/core";
import { IData, IRowsToShow } from "../types";

@Injectable({
  providedIn: 'root'
})
export class TableSettingsService {
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
}
