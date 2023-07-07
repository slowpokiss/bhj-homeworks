const loader = document.querySelector(".loader");
const items = document.getElementById("items");
const xhr = new XMLHttpRequest();


xhr.onload = () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    let a = xhr.response["response"]["Valute"]
    for (key in a) {
      items.insertAdjacentHTML('beforeend', '<div class="item"></div>');
      const item = items.lastElementChild; 
      const icode = document.createElement('div');
      const ivalue = document.createElement('div');
      const icurr = document.createElement('div');
      icode.classList.add('item__code');
      ivalue.classList.add('item__value');
      icurr.classList.add('item__currency');
      icode.textContent = a[key]["CharCode"];
      ivalue.textContent = a[key]["Value"];
      icurr.textContent = 'руб.';

      item.appendChild(icode);
      item.appendChild(ivalue);
      item.appendChild(icurr);
      items.appendChild(item)
    }
  }
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json'
xhr.send();