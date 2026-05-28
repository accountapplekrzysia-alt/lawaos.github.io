// --- Podświetlanie aktywnej sekcji w menu ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// --- Efekt "lava glow" na przyciskach ---
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 18px #ff6a00";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});

// --- Smooth scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
