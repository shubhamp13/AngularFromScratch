import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api-example',
  standalone: true,
  imports: [],
  templateUrl: './get-api-example.component.html',
  styleUrl: './get-api-example.component.css'
})
export class GetApiExampleComponent {
  constructor(private http: HttpClient) {

  }
  products: any = [];
  getAllProducts() {
    this.http.get("https://api.restful-api.dev/objects").subscribe((res) => {
      this.products = res;
    })
  }
}
