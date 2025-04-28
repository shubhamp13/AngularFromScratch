import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-get-api-3',
  standalone: true,
  imports: [],
  templateUrl: './get-api-3.component.html',
  styleUrl: './get-api-3.component.css'
})
export class GetApi3Component {
  todo: any = {
    userId: 0,
    id: 0,
    title: "",
    completed: false
  }
  constructor(private http: HttpClient) {
  }
  result: any = [];
  getAllTodo() {
    this.http.get("https://jsonplaceholder.typicode.com/todos/", this.todo).subscribe((res: any) => {
      this.result = res;
    }, error => {
      console.log("error")
    })
  }
}
