import { Component, Output, EventEmitter } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.css']
})
export class SwitchButtonComponent {

  @Output() filterData = new EventEmitter<any>();

checked = false
  filterDataWithSwitch() {
    this.checked = !this.checked
  this.filterData.emit(this.checked)
  }
}
