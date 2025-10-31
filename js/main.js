// Animaciones o interacciones globales
window.addEventListener("scroll", () => {
  document.querySelectorAll(".content").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
