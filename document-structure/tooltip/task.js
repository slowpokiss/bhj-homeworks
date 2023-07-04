const ttips = document.querySelectorAll('.has-tooltip')

ttips.forEach(el => {
  const tip = document.createElement('div');
  tip.textContent = el.title; 
  tip.classList.add('tooltip');
  el.after(tip);

  //tip.classList.add('tooltip_active')
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    tip.classList.toggle('tooltip_active')

    console.log(el.nextElementSibling.getBoundingClientRect().height);
    tip.style.position = 'absolute';
  })
});