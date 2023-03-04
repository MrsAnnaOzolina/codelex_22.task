import { Component, Input } from '@angular/core';
import {MyListService} from "../services/my-list.service"
import { OneItem } from "../services/my-list.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  checked =false
  
   myList:OneItem[] =  []

  constructor (private myListService: MyListService  ) {}

ngOnInit(){
  this.myListService.getData(this.checked).subscribe((response)=>{
    this.myList = response
  })
}
submit(inputData:any){
   
  this.myListService.addData(inputData.form.controls.name.value, inputData.form.controls.type.value)
  .subscribe((response)=>{
   response })
   this.ngOnInit()
  
}

deleteTask(itemId:any){
  this.myListService.deleteData(itemId)
  .subscribe((response)=>{
   response })
   this.ngOnInit()
  
}
getData(){
  console.log(this.checked)
  this.myListService.getData(this.checked)
  .subscribe((response)=>{
    this.myList = response })
}

}

