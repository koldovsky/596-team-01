let productsList;

// Promotional part of products
function renderProducts() {
    const promotionalProductsPart = document.querySelector(".promotion-list");
    let html = "";
    for (const product of productsList) {
        if (product.id === "promotionalProducts") {
            html += `<article>
                    <div>
                      <img src="img/${product.image}" alt="${product.alt}">
                      <h3>${product.title}</h3>
                      <a href=#>LEARN MORE - - - <span>&#10145;</span></a>
                    </div>
                </article>`;
        }
    }
    promotionalProductsPart.innerHTML = html;
}

// Best-selling products part
function renderBestSellingProducts(products) {
    const bestSellingListPart = document.querySelector(".best-selling-list");
    let html = "";
    for (const product of productsList) {
        if (product.id === "bestSellingProducts"){
                 html += `
                <article>
                    <img src="img/${product.image}" alt="${product.alt}">
                    <h3>${product.title}</h3>
                    <h4>${product.price}</h4>
                    <button class="button green" style="max-width: 150px">ORDER NOW</button>
                </article>
        `   
        }
    }
    bestSellingListPart.innerHTML = html;
}

async function fetchProducts() {
    const response = await fetch('productsBaseLevitin.json');
    productsList = await response.json();
    renderProducts();
    renderBestSellingProducts();
}

fetchProducts();