const signBTN = document.querySelector('.btn');
const form = document.getElementById('signin__form');
const xhr = new XMLHttpRequest();

if (localStorage.getItem('user_id')) {
  document.querySelector('.signin').classList.remove('signin_active');
  document.getElementById('welcome').classList.add('welcome_active');
  document.getElementById('user_id').textContent = localStorage.getItem('user_id');
}

signBTN.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (xhr.response['success']) {
    document.querySelector('.signin').classList.remove('signin_active');
    document.getElementById('welcome').classList.add('welcome_active');
    document.getElementById('user_id').textContent = xhr.response['user_id'];
    localStorage.setItem('user_id', xhr.response['user_id']);
  } else {
    alert('Неверный логин/пароль')
  }
  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.responseType = 'json';
  const formData = new FormData(form);
  xhr.send(formData);

})