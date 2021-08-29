import { simpleDiscount } from './modules/discounts.js';

const clearForm = e => {
  e.target.closest('form').reset();
  document.querySelector(`#discount_result`).innerHTML = '';
};

const getFormObject = form => Object.fromEntries(new FormData(form).entries());

const onClickCalcDiscount = e => {
  const form = e.target.closest('form');
  const data = getFormObject(form);
  const result = document.querySelector('#discount_result');

  if (data['price'] && data['discount']) {
    const price = parseFloat(data['price']);
    const discount = parseFloat(data['discount']);
    const newPrice = simpleDiscount(price, discount);

    result.innerHTML = ` ${newPrice} `;
  }
};

window.addEventListener('load', () => {
  document
    .querySelector('#bttn_discount_calc')
    .addEventListener('click', onClickCalcDiscount);

  document
    .querySelector('#bttn_discount_clear')
    .addEventListener('click', clearForm);
});
