/* ============================================================
   Jay Luna Oficial - JS Global
   ============================================================ */

// ===========================
// MENÚ HAMBURGUESA RESPONSIVE
// ===========================
const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (toggle && navMenu) {
  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggle.classList.toggle("open");
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      toggle.classList.remove("open");
    });
  });
}

// ===========================
// EFECTO SUAVE AL CARGAR PÁGINA
// ===========================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ===========================
// ANIMACIONES AL HACER SCROLL
// ===========================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".content").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
