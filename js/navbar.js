// código navbar
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
});

// submenu
const submenuBtn = document.querySelectorAll(".submenu__btn");
for (let i = 0; i < submenuBtn.length; i++) {
  submenuBtn[i].addEventListener("click", function () {
    if (window.innerWidth < 1024) {
      const subMenu = this.nextElementSibling;
      const heightSubMenu = subMenu.scrollHeight;

      if (subMenu.classList.contains("desplegar")) {
        subMenu.classList.remove("desplegar");
        subMenu.removeAttribute("style");
      } else {
        subMenu.classList.add("desplegar");
        subMenu.style.height = heightSubMenu + "px";
      }
    }
  });
}