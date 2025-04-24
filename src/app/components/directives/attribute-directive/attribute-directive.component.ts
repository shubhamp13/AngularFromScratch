import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  primaryColor: string = 'bg-primary text-white';
  dangerColor: string = 'bg-danger text-white';
  firstDivBgColor: string = 'bg-primary';
  secondDivBgColor: string = 'bg-danger';
  thirdDivBgColor: string = 'bg-warning';
  fourDivBgColor: string = 'bg-primary';
  isActiveDiv: boolean = false;
  num1: number = 0;
  num2: number = 0;

  students: any[] = [
    {
      name: 'Vaishnavi Hankare',
      class: 'MCA-I',
      roll_no: 24221,
      marks: 96,
      isActive: false
    },
    {
      name: 'Shubham Pandit Puri',
      class: 'MCA-I',
      roll_no: 24252,
      marks: 89,
      isActive: false
    },
    {
      name: 'Shrikant Navnath Surve',
      class: 'MCA-I',
      roll_no: 24362,
      marks: 79,
      isActive: false
    },
    {
      name: 'Shubham Balu Chaudhari',
      class: 'MCA-I',
      roll_no: 24210,
      marks: 69,
      isActive: false
    },
    {
      name: 'Omkar Ramesh Patil',
      class: 'BCA-III',
      roll_no: 350,
      marks: 29,
      isActive: true
    },
    {
      name: 'Raj Asian',
      class: 'BCA-III',
      roll_no: 450,
      marks: 19,
      isActive: true
    }
  ]
  changeRed() {
    this.firstDivBgColor = 'bg-danger';
  }

  changeBlue() {
    this.firstDivBgColor = 'bg-primary';
  }
  toggleColor() {
    this.isActiveDiv = true;
  }
}