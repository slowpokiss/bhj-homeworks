const revBlocks = document.querySelectorAll(".reveal");

function isVisbl(el) {
  const {top, bottom} = el.getBoundingClientRect();
  if ((bottom < 0) || (top > window.innerHeight)) {
    return false
  } 
  return true;
} 

revBlocks.forEach(el => {
  setInterval(() => {
    if (isVisbl(el)) {
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  }, 100);
});