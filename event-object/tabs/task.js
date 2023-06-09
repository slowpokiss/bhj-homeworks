const tabs = document.querySelectorAll(".tab");
const tabsCont = document.querySelectorAll(".tab__content");
Array.from(tabsCont);

tabs.forEach((el,ind) => {
  el.addEventListener('click', function () {
    const currTab = document.querySelector(".tab_active");
    const currTabCont = document.querySelector(".tab__content_active");

    currTab.classList.remove('tab_active');
    el.classList.add('tab_active');

    currTabCont.classList.remove('tab__content_active');
    tabsCont[ind].classList.add('tab__content_active');
  })
});

