const par = new URLSearchParams(window.location.search);
const email = par.get("email");
const userInfo = JSON.parse(localStorage.getItem(email));
const cardContainer = document.querySelector(".container");
const dashboardBtn = document.getElementById("dashboardBtn");

dashboardBtn.addEventListener("click", (e) => {
  setTimeout(() => {
    window.location.href = `dashboard.html?email=${email.toString()}`;
  }, 1000);
});

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    for (const i of userInfo.card) {
      console.log(i, data.products[i]);
      let p = data.products[i-1];
      cardContainer.innerHTML += `
        <div class="card" style="width: 15rem;" style>
            <img src="${p.images[0]}" style="width: 15rem;" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <p class="card-description"><b>Description: </b>${p.description}</p>
                <p class="card-category"><b>category: </b> ${p.category}</p>
                <p class="card-stock"><b>stock: </b>${p.stock}</p>
                <p class="card-price"><b>price: </b>$${p.price}</p>
            </div>
        </div>
        `;
    }
  });
