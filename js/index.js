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

function setTime(time) {
  let days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  let hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  let mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  let secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function pad(val) {
  return String(val).padStart(2, '0');
}

let interval;

let selector = document.getElementById('timer-1');
const refs = {
  days: selector.querySelector('span[data-value="days"]'),
  hours: selector.querySelector('span[data-value="hours"]'),
  mins: selector.querySelector('span[data-value="mins"]'),
  secs: selector.querySelector('span[data-value="secs"]'),

  btnStart: document.querySelector('button[data-action-start]'),
  btnStop: document.querySelector('button[data-action-stop]'),
};

function reset(...arr) {
  return arr.map(el => (el.textContent = '00'));
}

// =========== CLASS TIMER =========
class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  count() {
    let x = setTime(new Date(this.targetDate) - Date.now());

    refs.days.textContent = x.days;
    refs.hours.textContent = x.hours;
    refs.mins.textContent = x.mins;
    refs.secs.textContent = x.secs;
  }

  start() {
    interval = setInterval(() => {
      this.count();
    }, 1000);
  }
  stop() {
    const { days, hours, mins, secs } = refs;
    clearInterval(interval);
    reset(days, hours, mins, secs);
  }
}

refs.btnStart.addEventListener('click', () => {
  timer.start();
});

refs.btnStop.addEventListener('click', () => {
  timer.stop();
});

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});
