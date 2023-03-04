import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http"

export type OneItem = {
  id: number,
  name: string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<OneItem[]>("http://localhost:3004/myList?_sort=id&_order=desc")
  }
  deleteData(id: number) {
    return this.http.delete<OneItem>(`http://localhost:3004/myList/${id}`)
  }
  addData(name: string, type: string) {
    return this.http.post<OneItem>("http://localhost:3004/myList/", {
      name,
      type
    })
  }
  filterData() {
    return this.http.get<OneItem[]>("http://localhost:3004/myList?type=home")
  }
}

