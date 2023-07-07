const prog = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function(ev) {
    prog.value = ev.loaded;
  };

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  const formData = new FormData(form);
  xhr.send(formData);
})