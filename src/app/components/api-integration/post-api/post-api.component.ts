import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  department: any = {
    departmentId: 0,
    departmentName: "",
    departmentLogo: ""
  }
  constructor(private http: HttpClient) {
  }
  addProduct() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.department).subscribe((res: any) => {
      if (res.result) {
        alert("Department Added")
      }
      else {
        alert("Error")
        // alert(res.message);
      }
    });
    this.getDept();
  }
  dept: any = [];
  getDept() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
      this.dept = res.data;
    })
  }


}
