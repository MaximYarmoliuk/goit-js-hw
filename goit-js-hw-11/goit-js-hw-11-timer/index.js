"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.date = targetDate;
    this.parent = document.querySelector(this.selector);
    this.days = this.parent.querySelector('span[data-value = "days"');
    this.hours = this.parent.querySelector('span[data-value = "hours"');
    this.mins = this.parent.querySelector('span[data-value = "mins"');
    this.secs = this.parent.querySelector('span[data-value = "secs"');
    this.timeId();
  }

  timeId() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.date - currentTime;
      this.CountTheTime(deltaTime);
    }, 1000);
  }

  CountTheTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.updateClockFace(days, hours, mins, secs);
  }

  updateClockFace(days, hours, mins, secs) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2020")
});
