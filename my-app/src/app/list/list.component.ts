import { Component, EventEmitter, Input, Output} from '@angular/core';

 type OneItem = { 
  id: number, 
  name: string, 
  type: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  myList: OneItem[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteItem(id: number) {
    this.delete.emit(id);
  }
}
