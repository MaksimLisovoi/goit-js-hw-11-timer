// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//     const startTime = new Date('Jan 01, 2022');
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = startTime - currentTime;

//       updateClockface(deltaTime);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     updateClockface(0);
//     this.isActive = false;
//   },
// };
// refs.btnStart.addEventListener('click', timer.start.bind(timer));
// refs.btnStop.addEventListener('click', timer.stop.bind(timer));

// function updateClockface(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;
// }

// function pad(val) {
//   return String(val).padStart(2, '0');
// }

//======Function Timer=========
// let day = 'Jan 01 2022';

// function reset(...arr) {
//   return arr.map(el => (el.textContent = '00'));
// }

// =========== CLASS TIMER =========
let btnStart = document.querySelector('button[data-action-start]');
let btnStop = document.querySelector('button[data-action-stop]');
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timer = document.getElementById(selector);

    this.days = this.timer.querySelector('span[data-value="days"]');
    this.hours = this.timer.querySelector('span[data-value="hours"]');
    this.mins = this.timer.querySelector('span[data-value="mins"]');
    this.secs = this.timer.querySelector('span[data-value="secs"]');
  }

  start() {
    this.count();

    setInterval(() => {
      this.count();
    }, 1000);
  }

  stop() {
    clearInterval();
  }

  count() {
    let time = this.targetDate - Date.now();

    const { days, hours, mins, secs } = this.setTime(time);

    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }

  setTime(time) {
    let days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    let hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    let mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    let secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(val) {
    return String(val).padStart(2, '0');
  }
}

const timerNewYear = new CountdownTimer({
  selector: 'timer-1',
  targetDate: new Date('Jan 01, 2022'),
});

timerNewYear.start();
