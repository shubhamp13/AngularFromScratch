import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  states: string[] = ['Maharashtra', 'Karnataka', 'Tamilnadu', 'Goa', 'Delhi', 'Andhrapradesh', 'Punjab']

  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    state: new FormControl('', [Validators.required, Validators.minLength(3)]),
    zipCode: new FormControl('', [Validators.required, Validators.minLength(6)]),
    checkBox: new FormControl(true)
  })
  onSubmit() {
    console.log(this.studentForm);
    alert("Form is submitted")
  }

}
