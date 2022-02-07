const url = "https://kea-alt-del.dk/t7/api/products/2801";

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
  document.querySelector(".productinfo .subtle").textContent =
    product.subcategory;
  document.querySelector(".productinfo .price").textContent = product.price;
  document.querySelector(".productinfo .discount").textContent =
    product.discount;
}
