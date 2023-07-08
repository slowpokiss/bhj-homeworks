const ttips = document.querySelectorAll('.has-tooltip');

ttips.forEach(el => {
  const tip = document.createElement('div');
  tip.textContent = el.title; 
  tip.classList.add('tooltip');
  el.after(tip);
  
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    tip.classList.toggle('tooltip_active');
    tip.style.position = 'absolute';
    tip.style.left = String(el.getBoundingClientRect().x) + 'px';
  })
});