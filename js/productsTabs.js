
function renderTab(products, category) {
  let html = '';
  const productsByCategory = products.filter(product => product.category === category);
  for (const product of productsByCategory) {
    html += `
        <article>
          <img src="img/${product.image}" alt="${product.title}">
          <p>${product.title}</p>
          <p>${product.price} USD</p>
          <button class="button">order now</button>
        </article>
      `;
  }

  const productsList = document.querySelector('.products-list');
  productsList.innerHTML = html;
}

function setActiveTab(tabSelector) {
  const lastActiveTab = document.querySelector('.tabs .active');
  lastActiveTab.classList.remove('active');
  const newActiveTab = document.querySelector(tabSelector);
  newActiveTab.classList.add('active')
}


document.querySelector('.tab-armchairs')
  .addEventListener('click', () => {
    renderTab(products, 'armchairs');
    setActiveTab('.tab-armchairs');
  });
document.querySelector('.tab-lamps')
  .addEventListener('click', () => {
    renderTab(products, 'lamps');
    setActiveTab('.tab-lamps');
  });
document.querySelector('.tab-tables')
  .addEventListener('click', () => {
    renderTab(products, 'tables');
    setActiveTab('.tab-tables');
  });

function fetchProducts() {
  fetch('productsList.json')
    .then(response => response.json())
    .then(productsFromServer => products = productsFromServer)
    .then(() => renderTab(products, 'armchairs'));
}
let currentTab = 0;

function activeTab() {
  const activeStyle = document.querySelector('.active');

}
fetchProducts();

