gsap.from(".about__inner", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 60%"
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power2.out"
});