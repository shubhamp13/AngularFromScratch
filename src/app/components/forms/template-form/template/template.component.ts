import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  states: string[] = ['Maharashtra', 'Goa', 'Karnataka', 'Punjab', 'Rajasthan', 'Tamilnadu'];
  formValue: any;
  student: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptedTerms: false
  }
  onSubmit(form: any) {
    alert('submitted sucessfully');
    this.formValue = this.student;
    form.resetForm();

  }



}
