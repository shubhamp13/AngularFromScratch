import { Component } from '@angular/core';
import { CustomPipe } from '../custom-pipe/custom.pipe';

@Component({
  selector: 'app-cust-pipe-example',
  standalone: true,
  imports: [CustomPipe],
  templateUrl: './cust-pipe-example.component.html',
  styleUrl: './cust-pipe-example.component.css'
})
export class CustPipeExampleComponent {

  student: any = {
    name: 'Shubham Pandit Puri',
    age: '',
    email: undefined,
    class: null
  };
}
