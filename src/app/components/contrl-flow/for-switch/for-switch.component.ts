import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  dayNumber: string = '0';

  cities: string[] = ['Pune', 'Mumbai', 'Goa', 'Chennai', 'Delhi'];
  users: any[] = [
    {
      name: "Shubham Pandit Puri",
      class: "MCA",
      division: "B",
      gender: 'male',
      dateOfBirth: new Date("1998-03-18"),
      email: 'shubhampuri8297@gmail.com',
      phoneno: 8793569631,
      address: 'Dhayari Pune'
    },
    {
      name: "Sejal Patankar",
      class: "MCA",
      division: "B",
      gender: 'female',
      dateOfBirth: new Date("1998-12-01"),
      email: 'sejal.joshi@example.com',
      phoneno: 9876543210,
      address: 'Kothrud Pune'
    },
    {
      name: "Rohan Deshmukh",
      class: "MCA",
      division: "A",
      gender: 'male',
      dateOfBirth: new Date("1997-10-05"),
      email: 'rohan.d@example.com',
      phoneno: 9021456781,
      address: 'Baner Pune'
    },
    {
      name: "Priya Kulkarni",
      class: "MCA",
      division: "C",
      gender: 'female',
      dateOfBirth: new Date("1999-02-14"),
      email: 'priya.kul@example.com',
      phoneno: 9812345678,
      address: 'Hadapsar Pune'
    },
    {
      name: "Amit Patil",
      class: "MCA",
      division: "A",
      gender: 'male',
      dateOfBirth: new Date("1998-07-09"),
      email: 'amit.p@example.com',
      phoneno: 9898989898,
      address: 'Sinhgad Road Pune'
    },
    {
      name: "Sneha Shah",
      class: "MCA",
      division: "B",
      gender: 'female',
      dateOfBirth: new Date("1997-11-21"),
      email: 'sneha.shah@example.com',
      phoneno: 9765432109,
      address: 'Camp Pune'
    },
    {
      name: "Rahul Mehta",
      class: "MCA",
      division: "C",
      gender: 'male',
      dateOfBirth: new Date("1996-04-12"),
      email: 'rahul.m@example.com',
      phoneno: 9123456789,
      address: 'Aundh Pune'
    },
    {
      name: "Tanvi Rane",
      class: "MCA",
      division: "B",
      gender: 'female',
      dateOfBirth: new Date("1998-06-30"),
      email: 'tanvi.r@example.com',
      phoneno: 9834567890,
      address: 'Erandwane Pune'
    },
    {
      name: "Siddharth Pawar",
      class: "MCA",
      division: "A",
      gender: 'male',
      dateOfBirth: new Date("1997-01-25"),
      email: 'sidd.p@example.com',
      phoneno: 9001234567,
      address: 'Bibvewadi Pune'
    },
    {
      name: "Aarti Jadhav",
      class: "MCA",
      division: "C",
      gender: 'female',
      dateOfBirth: new Date("1999-09-10"),
      email: 'aarti.j@example.com',
      phoneno: 9090909090,
      address: 'Wakad Pune'
    }
  ];

}
