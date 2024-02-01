const link = document.querySelectorAll(".link");
link.forEach((item) => {
    item.addEventListener("click", function (e) {
        link.forEach((item) => {
            item.classList.remove("active");
        });
        e.target.classList.toggle("active");
    });
});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(even) {
    even.target.classList.toggle("fa-times");
    even.target.classList.toggle("fa-bars");
    menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
    // console.log(event.target);
    if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
        menu.classList.remove("is-show");
        toggle.classList.remove("fa-times");
        toggle.classList.add("fa-bars");
    }
}
function renderSweetAlert() {
    const template = ` <div class="sweet-alert">
      <i class="fa fa-check sweet-icon"></i>
      <p class="sweet-text">Congratulations on learning JS</p>
      </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
const button = document.querySelector(".button");
button.addEventListener("click", function () {
    renderSweetAlert();
    const sweetItem = document.querySelector(".sweet-alert");
    if (sweetItem) {
        setTimeout(function () {
            sweetItem.parentElement.removeChild(sweetItem);
        }, 2000);
    }
});
