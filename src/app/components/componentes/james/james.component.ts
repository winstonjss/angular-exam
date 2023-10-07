import { Component } from '@angular/core';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.css']
})
export class JamesComponent {

  showInfo: boolean = false;
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
