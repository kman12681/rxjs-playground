import { Component, OnInit } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  isRunning: boolean;
  timer = 0;
  seconds = 0;

  timerSub$ = new Subject<any>();
  timer$ = new Observable<number>();

  constructor() {}

  ngOnInit() {
  }

  onClick() {
    this.timerSub$.next();
    if (this.timer > 0) {
      this.pauseTimer();
      return;
    } else {
      this.isRunning = true;
      this.startTimer(this.isRunning);
    }
  }

  startTimer(isRunning) {
    this.timer++;
    if (isRunning) {
      this.timer$ = timer(0, 1000);
      this.timer$.subscribe(secs => (this.seconds = secs));
    }
  }

  pauseTimer() {
  }
}
