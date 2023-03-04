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

  if (inputData.form.controls.name.value.length < 5 || inputData.form.controls.name.value.length > 20 ){
   alert("Name should be at least 5 symbols long and npt longer then 20 symbols")
  } else if (inputData.form.controls.type.value === "") {
    alert("Choose type")
  }
  else if (inputData.form.controls.name.value.length > 5 && inputData.form.controls.name.value.length < 20 &&inputData.form.controls.type.value !== "") {
  this.myListService.addData(inputData.form.controls.name.value, inputData.form.controls.type.value)
  .subscribe((response)=>{
   response })
   this.ngOnInit()
   inputData.reset(); 
  }

 
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

