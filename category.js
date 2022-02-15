const url = "https://kea-alt-del.dk/t7/api/categories";

//res means response
fetch(url);
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleCategory(data);
  });

function handleCategory(data) {
  console.log(data);
  data.forEach(showCategory);
}

function showCategory(product) {
  console.log(product);
  //grab the template
  const template = document.querySelector("#categoryTemplate").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector("h3").textContent = `${product.category}`;
  copy
    .querySelector("a")
    .setAttribute("href", "productlist.html?category=" + product.category);

  //grab parent
  const parent = document.querySelector("main");

  //append it
  parent.appendChild(copy);
}
