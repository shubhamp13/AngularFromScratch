import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-one-way-databinding',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './one-way-databinding.component.html',
  styleUrl: './one-way-databinding.component.css'
})
export class OneWayDatabindingComponent {

  userName: string = 'Shubham Pandit Puri';
  contactNumber: number = 8793569631;
  isAvailable: boolean = false;
  todayDate = new Date();
  inputType: string = "text";
  className: string = 'button';
  constructor() {

  }

}
