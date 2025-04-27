import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  users: any = [];
  constructor(private http: HttpClient) {

  }
  getAlluser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.users = res;
    })
    console.log(this.users);
  }
  customers: any = [];
  getAllCustomers() {
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res: any) => {
      this.customers = res.data;
    })
  }

}
