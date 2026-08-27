const revealItems = document.querySelectorAll(".scroll-reveal");
const staggerGroups = document.querySelectorAll(
  ".question-grid, .story-gallery-grid, .service-list, .experience-thumbnails, .experience-flow"
);

const philosophySection = document.querySelector(".home-body .brand-philosophy");

if (philosophySection && "IntersectionObserver" in window) {
  const philosophyObserver = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("is-philosophy-visible", entry.isIntersecting);
    },
    { threshold: 0.35 }
  );

  philosophyObserver.observe(philosophySection);
}

staggerGroups.forEach((group) => {
  const items = group.querySelectorAll(".scroll-reveal, :scope > div");

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  });
});

if ("IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("reveal-ready"));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}
