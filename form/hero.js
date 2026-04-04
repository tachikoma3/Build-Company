gsap.from(".hero__title",  {
  trigger: ".hero",
  start: "top 40%",
  once: true,
  opacity: 0,
  x: -24,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".hero__img",  {
  trigger: ".hero",
  start: "top 40%",
  once: true,
  opacity: 0,
  x: 24,
  duration: 0.8,
  ease: "power3.out"
});


  gsap.from(".hero__text",  {
  trigger: ".hero",
  start: "top 40%",
  once: true,
  stagger:0.2,
  opacity: 0,
  y: 24,
  duration: 0.8,
  ease: "power3.out"

});

