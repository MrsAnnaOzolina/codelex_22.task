import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output() addData = new EventEmitter<any>();

  addItem(data:any) {
    this.addData.emit(data);
  }
}
