/* work-slider.js — portfolio.html 전용 가로 슬라이더
   한 번에 3개(데스크톱) / 2개(태블릿) / 1개(모바일)씩 보여주고,
   화살표 클릭 또는 드래그(스와이프)로 옆으로 넘어갑니다. */
(function () {
  const root = document.querySelector("[data-work-slider]");
  if (!root) return;

  const viewport = root.querySelector(".work-slider__viewport");
  const track = root.querySelector(".work-slider__track");
  const prevBtn = root.querySelector(".work-slider__arrow--prev");
  const nextBtn = root.querySelector(".work-slider__arrow--next");
  const slides = Array.from(track.children);

  let perView = 3;
  let index = 0;

  function getPerView() {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 900) return 2;
    return 3;
  }

  function update() {
    perView = getPerView();
    const maxIndex = Math.max(0, slides.length - perView);
    index = Math.min(index, maxIndex);

    const slideWidth = viewport.clientWidth / perView;
    slides.forEach((slide) => {
      slide.style.flex = `0 0 ${slideWidth}px`;
      slide.style.width = `${slideWidth}px`;
    });

    track.style.transform = `translateX(-${index * slideWidth}px)`;

    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= maxIndex;
    root.classList.toggle("is-at-start", index <= 0);
    root.classList.toggle("is-at-end", index >= maxIndex);
  }

  function go(delta) {
    const maxIndex = Math.max(0, slides.length - perView);
    index = Math.min(Math.max(index + delta, 0), maxIndex);
    update();
  }

  prevBtn?.addEventListener("click", () => go(-1));
  nextBtn?.addEventListener("click", () => go(1));

  window.addEventListener("resize", update);

  /* 드래그 / 스와이프 지원 */
  let dragging = false;
  let dragStartX = 0;
  let dragDeltaX = 0;

  function onPointerDown(e) {
    dragging = true;
    dragStartX = (e.touches ? e.touches[0].clientX : e.clientX);
    dragDeltaX = 0;
    track.style.transition = "none";
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    dragDeltaX = x - dragStartX;
    const slideWidth = viewport.clientWidth / perView;
    track.style.transform = `translateX(${-(index * slideWidth) + dragDeltaX}px)`;
  }

  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    track.style.transition = "";
    const threshold = viewport.clientWidth / perView / 4;
    if (dragDeltaX > threshold) {
      go(-1);
    } else if (dragDeltaX < -threshold) {
      go(1);
    } else {
      update();
    }
  }

  viewport.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);
  viewport.addEventListener("touchstart", onPointerDown, { passive: true });
  viewport.addEventListener("touchmove", onPointerMove, { passive: true });
  viewport.addEventListener("touchend", onPointerUp);

  update();
})();
