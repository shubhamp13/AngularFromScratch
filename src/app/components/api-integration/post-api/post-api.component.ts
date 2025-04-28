import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css'],
})
export class PostApiComponent implements OnInit {
  ngOnInit(): void {
    this.getDept();
  }
  isEdit: boolean = false;
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  department: FormGroup = new FormGroup({
    departmentId: new FormControl(0),
    departmentName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    departmentLogo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  dept: any = [];
  constructor(private deptService: DepartmentService) { }
  addDepartment() {
    this.deptService
      .addDepartment(this.department.value)
      .subscribe((res: any) => {
        if (res.result) {
          this.getDept();
          alert('Department Added Sucessfully');
        } else {
          alert('Failed To Add Department');
        }
      });
  }
  getDept() {
    this.deptService.getDepartment().subscribe((res: any) => {
      this.dept = res.data;
    });
  }
  editInfo(data: any) {
    this.isEdit = true;
    this.department.patchValue({
      departmentId: data.departmentId,
      departmentName: data.departmentName,
      departmentLogo: data.departmentLogo,
    });
    this.deptObj = { ...this.department.value };
    console.log(this.deptObj);
  }

  updateDept() {
    const updateDept = { ...this.department.value };
    this.deptService.updateDepartment(updateDept).subscribe((res: any) => {
      if (res.result) {
        alert('Department Updated Sucessfully');
        this.isEdit = false;
        this.getDept();
        this.department.reset();
      } else {
        alert('Update Department Failed');
      }
    });
  }
  deleteDept(deptNo: number) {
    const isDelete = confirm('Are You Sure You Want to delete?');
    if (isDelete) {
      this.deptService.deletDepartment(deptNo).subscribe((res: any) => {
        if (res.result) {
          this.getDept();
          alert('Deleted Sucessfully');
        } else {
          alert('Error Occured:');
        }
      });
    }
  }
}
