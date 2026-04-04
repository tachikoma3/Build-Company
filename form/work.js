gsap.from(".works__item1", {
  scrollTrigger: {
    trigger: ".works",
    start: "top 80%",
    once: true
  },
  x: -80,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".works__item2", {
  scrollTrigger: {
    trigger: ".works",
    start: "top 80%",
    once: true
  },
  x: 80,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});