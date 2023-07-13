const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close')

if (document.cookie === 'cookie=yes') {
  modal.classList.add('modal_active');
}

close.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'cookie=' + encodeURIComponent('yes');
})