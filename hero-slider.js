(function () {
  var media = document.querySelector("[data-hero-slider]");
  if (!media) return;

  var slides = Array.prototype.slice.call(media.querySelectorAll("img"));
  var dots = Array.prototype.slice.call(media.querySelectorAll(".biz-hero__dots span"));
  if (slides.length <= 1) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var index = slides.findIndex(function (img) {
    return img.classList.contains("is-active");
  });
  if (index < 0) index = 0;

  function show(nextIndex) {
    slides[index].classList.remove("is-active");
    if (dots[index]) dots[index].classList.remove("is-active");
    index = nextIndex;
    slides[index].classList.add("is-active");
    if (dots[index]) dots[index].classList.add("is-active");
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      if (i !== index) show(i);
    });
  });

  if (prefersReducedMotion) return;

  var intervalMs = 5000;
  setInterval(function () {
    show((index + 1) % slides.length);
  }, intervalMs);
})();
