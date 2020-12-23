refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),

  btnStart: document.querySelector('button[data-action-start]'),
};
console.log(btnStart);
const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();

      // console.log(startTime);
      // console.log(currentTime);

      const deltaTime = currentTime - startTime;
      updateClockface(deltaTime);
    }, 1000);
  },
};
timer.start();

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function pad(val) {
  return String(val).padStart(2, '0');
}
