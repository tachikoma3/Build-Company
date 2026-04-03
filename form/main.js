import "./hero.js";
import "./about.js";
import "./work.js";
import "./contact.js";
import "./animetion.js";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    duration: 0.6,
    ease: "power2.out"
  });
});