// Responsive navigation menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burger = document.getElementById("navBurger");

  burger.addEventListener("click", () => {
    nav.classList.toggle("clicked");
  });

  const navItems = document.querySelectorAll("nav > ul > li > a");

  navItems.forEach(item => {
    item.addEventListener("click", e => {
      const parent = e.target.parentElement;
    const submenu = parent.querySelector("ul"); // <-- check for submenu

    if (submenu) {
      e.preventDefault(); // only prevent navigation if there’s a submenu
      parent.classList.toggle("clicked");
    }
  });
});