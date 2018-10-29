import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showText: boolean = false;
  log = [];

  toggleText() {
    this.showText = !this.showText;
    this.log.push(this.log.length + 1);
  }

}
