/* ================================
   LawaOS — FULL SCRIPT.JS
   ================================ */

/* --- 1. Smooth Scroll --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


/* --- 2. Active Menu Highlight on Scroll --- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 150;
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


/* --- 3. Lava Glow on Buttons --- */
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 18px #ff6a00";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});


/* --- 4. Scroll Reveal Animation (LawaOS Glow) --- */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* --- 5. Subtle Lava Background Pulse --- */
function lavaPulse() {
  document.body.style.backgroundPosition =
    `${Math.sin(Date.now() / 1500) * 8}px ${Math.cos(Date.now() / 2000) * 8}px`;
  requestAnimationFrame(lavaPulse);
}
lavaPulse();
