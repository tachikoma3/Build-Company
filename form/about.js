gsap.from(".about__inner", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 40%"
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power3.out"
});

gsap.from(".about__img", {
  scrollTrigger: {
    trigger: ".about__inner",
    start: "top 40%"
  },
  stagger: 0.5,
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power3.out"
});