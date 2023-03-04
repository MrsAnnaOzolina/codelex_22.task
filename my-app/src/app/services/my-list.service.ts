import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

export type OneItem = { 
  id: number, 
  name: string, 
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class MyListService {

  constructor(private http: HttpClient ) {}
    getData(status:boolean){
      if (status){
    return  this.http.get<OneItem[]>("http://localhost:3004/myList?type=home")
  } else{
    return  this.http.get<OneItem[]>("http://localhost:3004/myList")
  }
  }
  addData(name:string, type:string){
    return  this.http.post<OneItem[]>("http://localhost:3004/myList",{
      name,
      type
    })
  }
  deleteData(id:number){
    return  this.http.delete<OneItem>(`http://localhost:3004/myList/${id}`)
  }

}
