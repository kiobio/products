'use strict';

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }

  store(count) {
    this.quantity += count;
  }
};

const products = [
  new Product('iPhone 8 128GB', 14990, 25),
  new Product('iPhone 11 256GB', 25590, 20),
  new Product('iPhone 11 Pro 256GB', 34590, 11),
  new Product('iPhone Xr 64GB', 16999, 34),
  new Product('iPhone 7 32GB', 8999, 5),
  new Product('iPhone Xs 64GB', 17999, 16),
  new Product('iPhone 11 Pro Max 512GB', 43790, 2),
];


const productListElm = document.querySelector('.product-list');

products.forEach((product) => {
  const productElm = document.createElement('div');
  productElm.className = 'product';
  productElm.innerHTML = `
    <div class="product__name">${product.name}</div>
    <div class="product__price">${product.price} CZK</div>
    <div class="product__quantity">${product.quantity} in stock</div>
    <button class="btn-buy">Buy</button>
  `;

  const btnBuy = productElm.querySelector('.btn-buy');
  const quantityElement = productElm.querySelector('.product__quantity');

  btnBuy.addEventListener('click', () => {
    product.sell();
    quantityElement.textContent = product.quantity + ' in stock';
  });

  productListElm.appendChild(productElm);
});
