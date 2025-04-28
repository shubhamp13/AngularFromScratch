import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {
  }
  getDepartment() {
    return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment");
  }

  addDepartment(deptObj: any) {
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", deptObj);
  }
  updateDepartment(data: any) {
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", data)
  }

  deletDepartment(id: any) {
    return this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id);
  }
}
