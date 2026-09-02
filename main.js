const revealItems = document.querySelectorAll(".scroll-reveal");
const staggerGroups = document.querySelectorAll(
  ".question-grid, .story-gallery-grid, .service-list, .experience-thumbnails, .experience-flow"
);

const philosophySection = document.querySelector(".home-body .brand-philosophy");
const manifestoSection = document.querySelector(".story-body .story-manifesto");

if (philosophySection && "IntersectionObserver" in window) {
  const philosophyObserver = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("is-philosophy-visible", entry.isIntersecting);
    },
    { threshold: 0.35 }
  );

  philosophyObserver.observe(philosophySection);
}

if (manifestoSection && "IntersectionObserver" in window) {
  const manifestoObserver = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("is-manifesto-visible", entry.isIntersecting);
    },
    { threshold: 0.35 }
  );

  manifestoObserver.observe(manifestoSection);
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

const portfolioModal = document.querySelector(".portfolio-modal");
const portfolioModalImage = document.querySelector(".portfolio-modal__image");
const portfolioButtons = document.querySelectorAll("[data-portfolio-image]");
let portfolioLastTrigger = null;

const closePortfolioModal = () => {
  if (!portfolioModal) return;

  portfolioModal.hidden = true;
  document.body.style.overflow = "";
  portfolioModalImage.removeAttribute("src");
  portfolioLastTrigger?.focus();
};

portfolioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!portfolioModal || !portfolioModalImage) return;

    portfolioLastTrigger = button;
    portfolioModalImage.src = button.dataset.portfolioImage;
    portfolioModalImage.alt = button.querySelector("img")?.alt || "포트폴리오 이미지";
    portfolioModal.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

portfolioModal?.addEventListener("click", (event) => {
  if (event.target === portfolioModal) closePortfolioModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && portfolioModal && !portfolioModal.hidden) {
    closePortfolioModal();
  }
});
