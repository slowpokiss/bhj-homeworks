const timer = document.getElementById("timer");

const minus = setInterval(() => {
  timer.innerHTML -= 1;
  console.log(timer.innerHTML)
  if (Number(timer.innerHTML) === 0) {
    clearInterval(minus);
    alert("Вы победили в конкурсе!");
  }
}, 1000)
