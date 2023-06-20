const input = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const list = document.querySelector('.tasks__list');

function diver(cls) {
  const el = document.createElement('div');
  el.classList = cls;
  return el;
}

// window.addEventListener('keypress', (ev) => {
//   if (ev.key === 'Enter') {
//     const task = diver('task')
//     task.appendChild(diver('task__title'))
//     task.firstChild.textContent = input.value;
//     task.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>')
//     list.appendChild(task)
  
//     task.lastChild.addEventListener('click', () =>{
//       list.removeChild(task)
//     })
//   }
// })

button.addEventListener('click', (ev) => {
  ev.preventDefault();
  const task = diver('task');
  task.appendChild(diver('task__title'));
  task.firstChild.textContent = input.value;
  task.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>')
  list.appendChild(task);
  input.value = '';

  task.lastChild.addEventListener('click', () =>{
    list.removeChild(task);
  })
})