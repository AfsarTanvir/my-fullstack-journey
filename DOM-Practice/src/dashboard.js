const par = new URLSearchParams(window.location.search);
const email = par.get("email");
const viewCardBtn = document.getElementById("viewCardBtn");
const userInfo = JSON.parse(localStorage.getItem(email));
const cardContainer = document.querySelector(".cardContainer");

function logout() {
  setTimeout(() => {
    window.location.href = "loginPage.html";
  }, 1000);
}

viewCardBtn.addEventListener("click", (e) => {
  setTimeout(() => {
    window.location.href = `cardPage.html?email=${email.toString()}`;
  }, 1000);
});

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 20; ++i) {
      let p = data.products[i];
      cardContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${p.images[0]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <p class="card-description"><b>Description: </b>${p.description}</p>
                <p class="card-category"><b>category: </b> ${p.category}</p>
                <p class="card-stock"><b>stock: </b>${p.stock}</p>
                <p class="card-price"><b>price: </b>$${p.price}</p>
                <button class="card-add" onclick="addCard(${p.id})">Add to card</button>
            </div>
        </div>
        `;
    }
  });

function addCard(Id) {
  if (!userInfo.card) {
    userInfo.card = [];
  }

  if (userInfo.card.includes(Id)) return;

  userInfo.card.push(Id);

  console.log(userInfo.card);
  localStorage.setItem(email.toString(), JSON.stringify(userInfo));
}
