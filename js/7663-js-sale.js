const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getUTCFullYear();
const launchDate = new Date(`July 11 ${currentYear} 18:00:00`);

var diff = null;

// update countdown time
function updateCountdown() {
  const currentTime = new Date();
  var currentTimeUTC = new Date(
    currentTime.getUTCFullYear(),
    currentTime.getUTCMonth(),
    currentTime.getUTCDate(),
    currentTime.getUTCHours(),
    currentTime.getUTCMinutes(),
    currentTime.getUTCSeconds(),
  );

  if (currentTimeUTC < launchDate) {
    diff = launchDate - currentTimeUTC;
    }
  else
    {
    diff = 0;
    }

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);


