gsap.registerPlugin(ScrollTrigger); // ← ここだけで登録すればOK

// 各ファイルの読み込みは不要（HTMLの<script>タグで直接読む）

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    duration: 0.6,
    ease: "power3.out"
  });
});