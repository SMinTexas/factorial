import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Factorial';
  input: number;
  fact: number;
  result: string = " ";

  onClick() {
    this.fact = this.input;
    for (var i = this.input - 1; i >= 1; i--) {
      this.fact = this.fact * i;
    }
    this.result = this.input.toString() + "! = " + this.fact.toString();
  }
}
