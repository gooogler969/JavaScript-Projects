setInterval(() => {
  // Create Date
  let date = new Date();
  // Get time
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let day;
  // sett clock 12 hours and change "AM" or "PM"
  day = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? (hour = 12) : hour;

  // if time samller 10 add 0
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // Set time in page
  document.querySelector(".hour-num").innerText = hour;
  document.querySelector(".min-num").innerText = min;
  document.querySelector(".sec-num").innerText = sec;
  document.querySelector(".am_pm").innerText = day;
}, 1000); // 1000 mls = 1s
