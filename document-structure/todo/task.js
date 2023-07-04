const input = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const list = document.querySelector('.tasks__list');

function diver(cls) {
  const el = document.createElement('div');
  el.classList = cls;
  return el;
}

button.addEventListener('click', (ev) => {
  ev.preventDefault();
  let task = diver('task');

  task.appendChild(diver('task__title'));
  task.firstChild.textContent = input.value;

  if ((task.firstChild.textContent.trim() !== '') && (task.firstChild.textContent !== null)) {
    task.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>');
    list.appendChild(task);
    input.value = '';
    task.lastChild.addEventListener('click', () =>{
      list.removeChild(task);
    })
  }
})