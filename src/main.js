const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu.classList.remove("opacity-0", "invisible");
    mobileMenu.classList.add("opacity-100", "visible");
    menuOverlay.classList.remove("opacity-0", "invisible");
    menuOverlay.classList.add("opacity-100", "visible");
    menuIcon.classList.add("opacity-0");
    closeIcon.classList.remove("opacity-0");
    document.body.style.overflow = "hidden";
  } else {
    mobileMenu.classList.remove("opacity-100", "visible");
    mobileMenu.classList.add("opacity-0", "invisible");
    menuOverlay.classList.remove("opacity-100", "visible");
    menuOverlay.classList.add("opacity-0", "invisible");
    menuIcon.classList.remove("opacity-0");
    closeIcon.classList.add("opacity-0");
    document.body.style.overflow = "";
  }
}

menuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

const menuItems = document.querySelectorAll("#mobile-menu a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) {
    toggleMenu();
  }
});

document.querySelector("button.font-bellefair")?.addEventListener("click", function () {
  window.location.href = "destination-moon.html";
});
