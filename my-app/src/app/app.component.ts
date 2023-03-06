import { Component } from '@angular/core';

import { AllDataService } from "../service/all-data.service"
import { OneItem } from "../service/all-data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myList: OneItem[] = []

  constructor(private myListService: AllDataService) { }
  ngOnInit() {
    this.myListService.getData().subscribe((response) => {
      this.myList = response
    })
  }

  deleteItem(itemId: number) {
    this.myListService.deleteData(itemId)
      .subscribe(() => {
        this.myList = this.myList.filter((list) => list.id !== itemId)
      })
  }

  addItem(inputData: any) {
    if (inputData.form.controls.name.value.length < 5 || inputData.form.controls.name.value.length > 20) {
    } else if (inputData.form.controls.type.value === "") {
    } else if (inputData.form.controls.name.value.length > 5 && inputData.form.controls.name.value.length < 20 && inputData.form.controls.type.value !== "") {
      this.myListService.addData(inputData.form.controls.name.value, inputData.form.controls.type.value)
        .subscribe((response) => {
          this.myList.unshift({ name: response.name, id: response.id, type: response.type })
        })
      inputData.form.controls.name.reset();
    }
  }
  filterData(status:boolean){
    if(status) {
      this.myListService.filterData()
        .subscribe((response) => {
           this.myList = response
        }) }
        else{
          this.myListService.getData().subscribe((response) => {
            this.myList = response
          })
        }
  }

}