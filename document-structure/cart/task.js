const cart = document.querySelector('.cart__products');
const control = document.querySelectorAll('.product__quantity-control');
const add = document.querySelectorAll('.product__add');

control.forEach(el => {
  el.addEventListener('click', () => {
    let prod_value = el.parentElement.children[1];
    if (el.classList.contains('product__quantity-control_inc')) {
      prod_value.textContent++;
    } else {
      (prod_value.textContent > 1) ? --prod_value.textContent: 0;
    }
  })
});

function diver(ind) {
  dv = document.createElement('div');
  const product = document.querySelectorAll('.product')[ind];
  dv.classList.add("cart__product");
  dv.insertAdjacentHTML('beforeend', '<img class="cart__product-image">');
  dv.insertAdjacentHTML('beforeend', '<div class="cart__product-count"></div>');
  dv.setAttribute('data-id', product.getAttribute('data-id'));
  dv.firstChild.setAttribute('src', product.getElementsByTagName('img')[0].getAttribute('src'));
  dv.lastChild.textContent = product.querySelector('.product__quantity-value').textContent;
  return dv;
}

add.forEach((el,ind) => {
  const dv = diver(ind);

  el.addEventListener('click', () => {
    const carts = document.querySelectorAll('.cart__product');
    const product = document.querySelectorAll('.product')[ind];
    const val = Number(product.querySelector('.product__quantity-value').textContent);

    if (!cart.contains(document.querySelector('.cart__product'))) {
      dv.lastChild.textContent = val;
      cart.appendChild(dv);
    } else {
      carts.forEach(el => {
        if (!(el.getAttribute('data-id') === dv.getAttribute('data-id'))) {
          cart.appendChild(dv);
        } else {
          dv.lastChild.textContent = Number(dv.lastChild.textContent) + val
        }
      });
    }
  })
}); 