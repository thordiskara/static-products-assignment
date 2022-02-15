const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
//const query = urlParams.get("q");
console.log(urlParams.get("id"));

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".productnav .topwear").textContent = product.category;
  document.querySelector(".productnav .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
  document.querySelector(".productinfo .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    ".productinfo .subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  if (product.soldout) {
    document.querySelector(".productimg").classList.add("soldOut");
  }

  //PRICE SHIT

  document.querySelector(".productpage .price").textContent =
    "DKK " + `${product.price}` + ",-";

  if (product.discount) {
    document.querySelector(".productinfo").classList.add("onSale");
  }

  document.querySelector(".productpage .discounted p:last-child").textContent =
    `${product.discount}` + "% OFF";

  document.querySelector(".productpage .discounted p").textContent =
    "DKK " +
    Math.round(`${product.price - (product.price * product.discount) / 100}`) +
    ",-";

  //PRODUCT INFO
  document.querySelector(".moreinfo .color").textContent = product.basecolour;
  document.querySelector(".moreinfo .season").textContent = product.season;
  document.querySelector(".moreinfo .subcat").textContent = product.subcategory;
  document.querySelector(".moreinfo .productionyear").textContent =
    product.productionyear;
}
