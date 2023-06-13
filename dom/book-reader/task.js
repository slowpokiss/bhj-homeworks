const fs = document.querySelectorAll('.font-size');
const bookCont = document.querySelector('.book');

fs.forEach((el) => {
  el.addEventListener('click', function(ev)  {
    ev.preventDefault();
    const currFs = document.querySelector(".font-size_active");
    currFs.classList.remove('font-size_active');
    el.classList.add('font-size_active');
    
    const size = ev.target.dataset.size;
    if (size) {
      bookCont.className = `book__content book_fs-${size}`;
    } else {
      bookCont.className = "book__content";
    }
  })
});