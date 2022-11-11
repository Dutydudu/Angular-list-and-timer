import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: number = 0;

  constructor() {}

  start(interval: string) {
    this.timer = setInterval(() => {
      this.counter + this.counter + Number(interval);
    }, 1000);
  }

  stop() {
    return (this.counter = 0);
  }

  getCounter() {
    return this.counter;
  }
}
