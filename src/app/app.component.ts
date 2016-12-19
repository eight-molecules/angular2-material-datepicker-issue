import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private date: Date = null;

  constructor() {
    this.date = new Date();
  }
  
  log() {
    console.log('click');
  }
}
