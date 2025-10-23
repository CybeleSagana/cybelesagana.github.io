document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burger = document.getElementById("navBurger");

  burger.addEventListener("click", () => {
    nav.classList.toggle("clicked");
  });

  const submenuParents = document.querySelectorAll("nav > ul > li"); //ASKED CHATGPT ABT THIS

  submenuParents.forEach(parent => {
    const link = parent.querySelector("a");
    const submenu = parent.querySelector("ul");

    if (submenu) {
      link.addEventListener("click", e => {
        e.preventDefault(); // stop navigation if it's just a toggle
        parent.classList.toggle("clicked");
      });
    }
  });
});
