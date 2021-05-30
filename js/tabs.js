let products;

function renderTab(products, category) {
    let html = '';
    const productsByCategory = products.filter( product => product.category === category);
    for (const product of productsByCategory) {
      html += `
        <article>
          <img src="img/${product.image}" alt="${product.title}">
          <article class="out-of-stock"><p>>${product.quantity === 0 ? "Out of stock": ""}</p></article>
          <p>${product.title}</p>
          <p>${product.price} USD</p>
        </article>
      `;
    }
    const productsList = document.querySelector('.products-list');
    productsList.innerHTML = html;
  }

  document.querySelector('.tab-armchairs')
          .addEventListener('click', () => {
            renderTab(products, 'armchairs');
            });
  document.querySelector('.tab-lamps')
          .addEventListener('click', () => renderTab(products, 'lamps'));
  document.querySelector('.tab-tables')
          .addEventListener('click', () => renderTab(products, 'tables'));
  
  // product.className = 'active';
  // if (product.quantity === 0) {
  //   productsByCategory.className = 'active';  ;
  //   }
  //   productsByCategory.className = ''
    

  function fetchProducts() {
    fetch('productsList.json')
        .then(response => response.json() )
        .then(productsFromServer => products = productsFromServer)
        .then( () => renderTab() )
}
    
      fetchProducts();

  renderTab(products, 'armchairs');