const answ = document.querySelector('.poll__answers');
const title = document.querySelector('.poll__title'); 
// почему-то перебор через reduce для xhrTwo.response['stat'] не работает
const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE) {
    title.textContent = xhr.response['data']['title'];

    for (key in xhr.response['data']['answers']) {
      let poll = document.createElement('button');
      poll.classList.add('poll__answer');
      poll.textContent = xhr.response['data']['answers'][key];
      const position = key;
      const id = xhr.response['id'];
      
      poll.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!')
        const xhrTwo = new XMLHttpRequest();   
        xhrTwo.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
        xhrTwo.responseType = 'json';
        xhrTwo.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        xhrTwo.send(`vote=${id}&answer=${position}`);
        
        xhrTwo.onload = () => {
        if (xhrTwo.readyState === xhrTwo.DONE) {
          let allVotes = 0;
          answ.innerHTML = '';
          xhrTwo.response['stat'].forEach(el => allVotes += el['votes']); 
          xhrTwo.response['stat'].forEach(el => {
            const voteStat = document.createElement('div')
            voteStat.textContent = `${el['answer']}: ${((el['votes'] / allVotes) * 100).toFixed(2)}%`;
            answ.appendChild(voteStat);
          });    
        }
        }
        
      })
      answ.appendChild(poll)
    }
  }
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json'
xhr.send();