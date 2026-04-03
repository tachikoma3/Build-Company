document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".contact__inner", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      once: true
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});