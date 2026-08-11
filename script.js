
// Typing Animation
const words = [
  "Business Systems Student",
  "Future Business Analyst",
  "Business Analysis & Data Analytics Enthusiast",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {
  const current = words[wordIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, charIndex++);
  } else {
    typing.textContent = current.substring(0, charIndex--);
  }

  let speed = deleting ? 60 : 100;

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// Mouse Glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Scroll to Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});