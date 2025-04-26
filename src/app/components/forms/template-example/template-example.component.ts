import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-example',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './template-example.component.html',
  styleUrl: './template-example.component.css'
})
export class TemplateExampleComponent {
  isSubmitted: boolean = false;
  student: any = {
    firstName: '',
    lastName: '',
    state: '',
    city: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
  }
  onSubmit() {
    alert("Form Has been submitted");
    this.isSubmitted = true;
  }

}
