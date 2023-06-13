const revBlocks = document.querySelectorAll(".reveal");

function isVisbl(el) {
  const {top, bottom} = el.getBoundingClientRect();
  if ((bottom < 0) || (top > window.innerHeight)) {
    return false
  } 
  return true;
} 

window.addEventListener('scroll', function() {
  revBlocks.forEach(el => {
    if (isVisbl(el)) {
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  });
})