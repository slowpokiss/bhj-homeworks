const dval = document.querySelector(".dropdown__value");
const dlist = document.querySelector(".dropdown__list");
const ditem = document.querySelectorAll(".dropdown__item");
const dlink = document.querySelectorAll(".dropdown__link");

dval.onclick = function() {
  dlist.classList.toggle("dropdown__list_active");
}

dlink.forEach(el => {
  el.closest('li').onclick = function(event) {
    event.preventDefault();
    dval.textContent = el.closest('li').textContent;
    dlist.classList.remove("dropdown__list_active");
  }
});
