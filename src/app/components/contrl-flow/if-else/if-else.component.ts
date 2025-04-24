import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  isDiv1Visible: boolean = false;
  isToggle: boolean = false;
  num1: number = 0;
  num2: number = 0;
  select: string = '';

  showDiv() {
    this.isDiv1Visible = true;
  }
  hideDiv() {
    this.isDiv1Visible = false;
  }
  toggleDiv() {
    this.isToggle = !this.isToggle;

  }

}
