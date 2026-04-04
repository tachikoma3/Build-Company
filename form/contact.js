  gsap.from(".contact__inner", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 40%",
      once: true
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });