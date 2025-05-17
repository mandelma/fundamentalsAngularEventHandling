import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perform-divide',
  imports: [FormsModule, CommonModule],
  template: `<p>Received: {{ item }}</p>`,
  templateUrl: './perform-divide.component.html',
  styleUrl: './perform-divide.component.css'
})
export class PerformDivideComponent {
  options = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  selected = this.options[0];

  

  divided: string = "";

  @Input() sum: number = 0;

  

  divideSum = () => {
    console.log("Selected " + this.selected + " Item " + this.sum);
    this.divided = this.sum + " / " + this.selected + " = " + (this.sum / this.selected);
  }

}
 