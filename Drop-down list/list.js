let toggleMenu = document.querySelectorAll(".panel-heading");

toggleMenu.forEach(function (items) {
  items.addEventListener("click", function () {
    this.classList.toggle("change_icon");
    let thisParent = items.closest(".panels");
    let thisContent = thisParent.children[1];
    thisContent.classList.toggle("collapse");
  });
});
