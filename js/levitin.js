// Promotional part of products
const porductsList =
    `[
    {
        "id": 1,
        "image": "green-bed.png",
        "alt": "Green Bed - photo",
        "title": "<span><b>15% off </b></span>on Tables & Cabinets"
    },
    {
        "id": 2,
        "image": "window_with_sofa.webp",
        "alt": "Window with sofa - photo",
        "title": "All-White Collection in Store"
    },
    {
        "id": 3,
        "image": "yellow_chear.webp",
        "alt": "Yellow chear - photo",
        "title": "<span><b>NEW! </b></span>Modern Collection by ARM"
    }
]`;

function renderProducts(products) {
    const promotionalProductsPart = document.querySelector(".promotion-list");
    let html = "";
    for (const product of products) {
        html += `<article>
                    <div>
                      <img src="img/${product.image}" alt="${product.alt}">
                      <h3>${product.title}</h3>
                      <a href=#>LEARN MORE - - - <span>&#10145;</span></a>
                    </div>
                </article>`;
    }
    promotionalProductsPart.innerHTML = html;

}

renderProducts(JSON.parse(porductsList));

// Best-selling products part

const bestSellingProducts =
    `[
    {
        "id": 1,
        "image": "best_selling_white_chear.png",
        "alt": "White chear - photo",
        "title": "Lord armchair, Miedel Home",
        "price": "120.00USD"
    },
    {
        "id": 2,
        "image": "best_selling_green_chear.png",
        "alt": "Green chear - photo",
        "title": "Ultimate Green chair, XODO",
        "price": "90.00USD"
    },
    {
        "id": 3,
        "image": "best_selling_pink_chear.png",
        "alt": "Valetta armchear - photo",
        "title": "Valetta armchair, ZIX studio",
        "price": "310.00USD"
    }
]`

function renderBestSellingProducts (products){
    const bestSellingListPart = document.querySelector(".best-selling-list");
    let html = "";
    for (const product of products){
        html += `
                <article>
                    <img src="img/${product.image}" alt="${product.alt}">
                    <h3>${product.title}</h3>
                    <h4>${product.price}</h4>
                    <button class="button green" style="max-width: 150px">ORDER NOW</button>
                </article>
        `
    }
    bestSellingListPart.innerHTML = html;
}
renderBestSellingProducts(JSON.parse(bestSellingProducts));