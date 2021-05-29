function renderTab(products, category) {
    let html = '';
    const productsByCategory = products.filter( product => product.category === category );
    for (const product of productsByCategory) {
      html += `
        <article>
          <img src="img/${product.image}" alt="${product.title}">
          <p>${product.title}</p>
          <p>${product.price} USD</p>
          <p>${product.quantity === 0 ? "OUT OF STOCK": ""}</p> 
        </article>
      `;
    }
    const productsList = document.querySelector('.products-list');
    productsList.innerHTML = html;
  }
  function fetchProducts() {
        fetch('productsList.json')
            .then(response => response.json() )
            .then(productsFromServer => products = productsFromServer)
            .then( () => renderTabs() )
    }

  fetchProducts();

  document.querySelector('.tab-armchairs')
          .addEventListener('click', () => {
            renderTab(products, 'armchairs');
            });
  document.querySelector('.tab-lamps')
          .addEventListener('click', () => renderTab(products, 'lamps'));
  document.querySelector('.tab-tables')
          .addEventListener('click', () => renderTab(products, 'tables'));
  
  renderTab(products, 'armchairs');