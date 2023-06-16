setInterval(() => {
  let rcase = document.querySelector('.rotator__case_active');
  
  if (rcase.nextElementSibling === null) { 
    rcase.classList.remove('rotator__case_active');
    rcase.parentElement.firstElementChild.classList.add('rotator__case_active');
  } else { 
    if (rcase.parentElement.firstElementChild.getAttribute('style') === null) {
      rcase.parentElement.firstElementChild.setAttribute("style", "color: " + String(rcase.parentElement.firstElementChild.getAttribute('data-color')))
    }
    rcase.nextElementSibling.setAttribute("style", "color: " + String(rcase.nextElementSibling.getAttribute('data-color')))
    
    rcase.classList.remove('rotator__case_active');
    rcase.nextElementSibling.classList.add('rotator__case_active');
  }
}, 1000);