import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerformDivideComponent } from '../perform-divide/perform-divide.component';

@Component({
  selector: 'app-get-random',
  imports: [CommonModule, FormsModule, PerformDivideComponent],
  templateUrl: './get-random.component.html',
  styleUrl: './get-random.component.css'
})
export class GetRandomComponent {
  
  result: number | null = null;
  input_number: number | null = null;
  rand: number | null = null;
  randPlusInput: string = "";
  parentMessage: number = 0;
  
  generateRandomNumber = (): void => {
    let generated: number = Math.floor(Math.random() * 100) + 1;
    this.rand = generated;
    if (this.input_number !== null) {
      console.log(this.input_number + " + " + generated + " = " + (this.input_number + generated));
      this.randPlusInput = this.input_number + " + " + generated + " = " + (this.input_number + generated)
      this.result = this.input_number + generated
    } else {
      this.result = generated;
      
    }
    
    this.parentMessage = this.result;
  }

}
