// prefers-reduced-motion 判定
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * fadeUp animation
 * @param {string} target - 対象セレクタ
 * @param {Object} options - 追加オプション
 */
  // 動きを減らす設定の場合はアニメーションしない
  if (reduceMotion) {
    gsap.set(target, { opacity: 1, y: 0 });
    return;
  }

  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: "top 60%",
      once: true
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
    ...options
  });