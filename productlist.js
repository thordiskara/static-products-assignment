const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const url =
  "https://kea-alt-del.dk/t7/api/products?limit=12&category=" + category;

//res means response
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //grab the template
  const template = document.querySelector("#topProductsTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector("a").setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  copy.querySelector("h3").textContent = `${product.productdisplayname}`;

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  copy.querySelector("img").alt = `${product.productdisplayname}`;

  copy.querySelector(".price").textContent =
    "DKK" + " " + `${product.price}` + ",-";

  copy.querySelector(".discounted p:last-child").textContent =
    `${product.discount}` + "% OFF";

  //soldOut onSale
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }

  copy.querySelector(".discounted p").textContent =
    "DKK " +
    Math.round(`${product.price - (product.price * product.discount) / 100}`) +
    ",-";

  //grab parent
  parent = document.querySelector("main");
  //append it
  parent.appendChild(copy);
}

// fetch the data

document.querySelector(".category1").textContent = category;
document.querySelector(".listtype").textContent = category;
