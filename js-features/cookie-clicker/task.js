const clickCount = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function () {
  clickCount.innerHTML++;
  cookie.width = 250;
  setTimeout(() => {
    cookie.width = 200;
  }, 100);
}