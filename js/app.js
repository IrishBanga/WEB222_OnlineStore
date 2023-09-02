/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       IRISH BANGA
 *      Student ID: 112435227
 *      Date:       09/08/2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

document.addEventListener("DOMContentLoaded", function () {
  const m_menu = document.querySelector("#menu");
  const m_category = document.querySelector("#selected-category");
  const m_products = document.querySelector("#category-products");

  function createCategoryButtons() {
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.appendChild(document.createTextNode(category.name));
      button.addEventListener("click", () => displayProductsByCategory(category.id));
      m_menu.appendChild(button);
    });
  }

  function displayProductsByCategory(categoryId) {
    m_category.innerHTML = "";
    m_category.appendChild(
      document.createTextNode(categories.find((element) => element.id === categoryId).name)
    );

    m_products.innerHTML = "";
    const productsInCategory = products.filter(
      (product) =>
        product.categories.includes(categoryId) &&
        (product.discontinued === false || product.discontinued === undefined)
    );

    productsInCategory.forEach((product) => {
      const card = createProductCard(product);
      m_products.appendChild(card);
    });
  }

  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click", () => console.log(product));

    const p_image = document.createElement("img");
    p_image.src = product.imageUrl;
    p_image.classList.add("card-image");

    const p_name = document.createElement("h4");
    p_name.classList.add("product-title");
    p_name.appendChild(document.createTextNode(product.title));

    const p_description = document.createElement("p");
    p_description.classList.add("product-description");
    p_description.appendChild(document.createTextNode(product.description));

    const p_price = document.createElement("span");
    p_price.classList.add("product-price");
    const formattedPrice = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD"
    }).format(product.price / 100);
    p_price.appendChild(document.createTextNode(formattedPrice));

    const p_details = document.createElement("div");
    p_details.classList.add("product-details");
    p_details.appendChild(p_name);
    p_details.appendChild(p_description);
    p_details.appendChild(p_price);

    card.appendChild(p_image);
    card.appendChild(p_details);
    return card;
  }
  createCategoryButtons();
  displayProductsByCategory(categories[0].id);
});
