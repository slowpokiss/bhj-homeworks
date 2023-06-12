const fs = document.querySelectorAll('.font-size');
const bookCont = document.querySelector('.book');


fs.forEach((el, ind) => {
  el.addEventListener('click', function(ev)  {
    ev.preventDefault();
    const currFs = document.querySelector(".font-size_active");
    currFs.classList.remove('font-size_active');
    el.classList.add('font-size_active');
    
    if (ind === 0) {
      bookCont.classList.remove('book_fs-big');
      bookCont.classList.add('book_fs-small');
    } if (ind === 1) {
      bookCont.classList.remove('book_fs-small');
      bookCont.classList.remove('book_fs-big');
    } if (ind === 2) {
      bookCont.classList.remove('book_fs-small');
      bookCont.classList.add('book_fs-big');
    }
  
  })
});

