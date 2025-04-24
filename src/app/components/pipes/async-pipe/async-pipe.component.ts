import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.css'
})
export class AsyncPipeComponent {

  currentTime: Observable<Date>;
  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }

}
