gsap.from(".works__item", {
  scrollTrigger: {
    trigger: ".works",
    start: "top 50%",
    once: true
  },
  y: -80,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.2,
  delay: 0.5
});
