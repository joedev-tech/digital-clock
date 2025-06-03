let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
  let today = new Date();

  hrs.innerHTML = (today.getHours() < 10 ? "0" : "") + today.getHours();
  mins.innerHTML = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
  sec.innerHTML = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
}, 1000);
