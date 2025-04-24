import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  constructor(private router: Router) {

  }
  isVisible: boolean = false;
  isToggle: boolean = false;
  num1: number = 0;
  num2: number = 0;
  isChecked: boolean = false;
  state: string = '';
  cityArray: string[] = ['Pune', 'Latur', 'Omerga', 'Ambejogai'];
  users: any[] = [
    {
      name: 'Shubham Pandit Puri',
      class: 'MCA-I',
      roll_no: 24252,
      isActive: false
    },
    {
      name: 'Shrikant Navnath Surve',
      class: 'MCA-I',
      roll_no: 24362,
      isActive: false
    },
    {
      name: 'Shubham Balu Chaudhari',
      class: 'MCA-I',
      roll_no: 24210,
      isActive: false
    }
  ]
  navigateToAttribute() {
    this.router.navigateByUrl('/attribute-dir');
  }
  hideDiv() {
    this.isVisible = false;
  }
  showDiv() {
    this.isVisible = true;
  }
  toggleDiv() {
    if (this.isToggle) {
      this.isToggle = false;
      return;
    }
    this.isToggle = true;
    return;
  }

}
