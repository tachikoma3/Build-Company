gsap.from(".about__img", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 40%"
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power3.out"
});
