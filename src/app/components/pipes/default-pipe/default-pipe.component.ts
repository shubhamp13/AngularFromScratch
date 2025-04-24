import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-default-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe],
  templateUrl: './default-pipe.component.html',
  styleUrl: './default-pipe.component.css'
})
export class DefaultPipeComponent {
  firstName: string = 'shubham';
  lastName: string = 'PURI';
  fullName: string = 'shubham pandit puri';
  todayDate = new Date();
  todayDate1: Observable<Date>;
  constructor() {
    this.todayDate1 = interval(1000).pipe(map(() => new Date()));
  }
  student: any = {
    name: 'Shubham Puri',
    gender: 'Male',
    class: 'MCA',
    email: 'shubham@gmail.com'
  }

}
