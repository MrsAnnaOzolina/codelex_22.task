import { Component, Output, EventEmitter } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.css']
})
export class SwitchButtonComponent {

  @Output() filterData = new EventEmitter<any>();

checked = false
  filterDataWithSwitch(checked:boolean) {
  this.filterData.emit(checked)
  }
}
