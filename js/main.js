// ===============================
// Menú hamburguesa funcional
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navMenu.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

// ===============================
// Animaciones de aparición
// ===============================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".content").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
