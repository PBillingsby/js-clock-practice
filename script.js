function startClock() {
  let today = new Date();
  let hour = today.getHours();
  amPm(hour, today);
  let minute = today.getMinutes();
  let second = today.getSeconds();
  if (minute < 10) {minute = "0" + minute};
  if (second < 10) {second = "0" + second};
  document.getElementById('clock').innerText = `${hour}:${minute}:${second}`;

  setTimeout(startClock, 500);
}

function amPm(hourInput, date) {
  let side = document.getElementById('am-pm');
  let year = document.getElementById("year")
  if (hourInput > 12 && hourInput <= 24) {
    side.innerText = "pm";
  }
  else {
    side.innerText = "am";
  }
  year.innerText = `${date.getDay()} ${date.getMonth()}, ${date.getFullYear()}`;
}
