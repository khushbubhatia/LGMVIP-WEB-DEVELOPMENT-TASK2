const contain = document.querySelector(".container");
const getelement = document.querySelector(".getelement");
const hamburger = document.querySelector(".fa-bars");
const navtoggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// api fetching
async function getUsers() {
  let url = "https://reqres.in/api/users?page=1";
  try {
    let res = await fetch(url);
    let dataItem = await res.json();
    let card = dataItem.data.map((element) => {
      return `
        <div class="wrap">
        <div class="card">
    <div class="card-liner">
    <figure><img src="${element.avatar}" alt="" class="avatar"/> </figure>
    <div class="card--title">
      <h3 class="first-name">${element.first_name}</h3>
      <h3 class="last-name">${element.last_name}</h3>
    </div>
    <div class="card--desc">
      <hr />
      <a href='' class="email">${element.email}</a>
    </div>
    </div>
  </div>
  </div>`;
    });
    contain.innerHTML = card;
  } catch (err) {
    console.log(err);
  }
}

// loader and function call
getelement.addEventListener("click", () => {
  contain.innerHTML = `<div class='loader'></div>`;
  setTimeout(() => {
    getUsers();
  }, 5000);
});

// toggle element
navtoggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
