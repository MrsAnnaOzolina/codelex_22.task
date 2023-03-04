import { Component } from '@angular/core';
import {MyListService} from "../services/my-list.service"
import { OneItem } from "../services/my-list.service"


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
constructor (private myListService: MyListService) {}

// submit(a:any){
   
//     this.myListService.addData(a.form.controls.name.value, a.form.controls.type.value).subscribe((response)=>{
//      response })
//      window.location.reload();
//     // return  this.http.get<OneItem[]>("http://localhost:3004/myList")
//     console.log(a.form.controls.name.value, a.form.controls.type.value  )
//   }
}
