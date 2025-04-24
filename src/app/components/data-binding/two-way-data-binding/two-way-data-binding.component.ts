import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {

  name: string = 'shubham pandit puri';
  email: string = 'shubhampuri8297@gmail.com';
  dateOfBirth = new Date();
  address: string = 'Dhayari Pune';
  phoneNumber: number = 8793569631;
  gender: string = "male";
  password: string = 'Shubham@144';
  state: string = 'Maharashtra';

  inputTextBox: string = 'textbox';
  inputEmail: string = 'email';
  inputNumber: string = 'number';
  inputRadio: string = 'radio';
  inputPassword: string = 'password';
  inputDate: string = 'date';
  languages: Array<any> = [];

  onSubmit() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
    console.log(this.gender);
    console.log(this.dateOfBirth);
    console.log(this.state);

    console.log(this);
    alert("Form Is Submitted");
  }


}
