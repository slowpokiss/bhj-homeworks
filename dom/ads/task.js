setInterval(() => {
  let rcase = document.querySelector('.rotator__case_active');

  if (rcase.nextElementSibling === null) { 
    rcase.setAttribute("style", "color: " + String(rcase.getAttribute('data-color')))
    rcase.classList.remove('rotator__case_active');
    rcase.parentElement.firstElementChild.classList.add('rotator__case_active');
  } else {  
    rcase.classList.remove('rotator__case_active');
    rcase.nextElementSibling.classList.add('rotator__case_active');

  }
}, 1000);