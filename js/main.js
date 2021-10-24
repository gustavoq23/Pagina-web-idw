window.onload = () => {
    timer(30);
  }
  const d = document;
  const daysElement = d.querySelector('#clockDays');
  const hoursElement = d.querySelector('#clockHours');
  const minutesElement = d.querySelector('#clockMinutes');
  const secondsElement = d.querySelector('#clockSeconds');
  let countdown;
  
    function timer(hours) {
      const now = Date.now();
      const then = now + (hours * 60 * 60 ) * 1000;
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
  
        if(secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        }else{
          displayTimeLeft(secondsLeft);
        }
      },1000);
    }
  
    function displayTimeLeft(seconds) {
      daysElement.textContent = Math.floor(seconds / 86400);
      hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
      minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  
  
  
  /*
    start countdown
    enter number and format
    days, hours, minutes or seconds
  */
  // countDownClock(20, 'days');