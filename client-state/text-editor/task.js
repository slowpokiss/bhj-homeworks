const editor = document.getElementById('editor');
const clearBtn = document.querySelector('.clearBTN')

const val = localStorage.getItem('value'); 

if (val) {
  editor.value = val;
} else {
  document.addEventListener('keydown', function () {
    localStorage.setItem('value', editor.value);
  });
}

clearBtn.addEventListener('click', () => {
  localStorage.clear();
})