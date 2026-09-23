const revealItems = document.querySelectorAll(".scroll-reveal");
const staggerGroups = document.querySelectorAll(
  ".question-grid, .story-gallery-grid, .service-list, .experience-thumbnails, .experience-flow"
);

const philosophySection = document.querySelector(".home-body .brand-philosophy");
const philosophyTrack = document.querySelector(".home-body .brand-philosophy-track");
const heroScene = document.querySelector(".home-body .hero-scene");
const thirdPage = document.querySelector(".home-body .service-overview");
const philosophyBlocks = document.querySelectorAll(".home-body .philosophy-block");
const manifestoSection = document.querySelector(".story-body .story-manifesto");
const designerFlow = document.querySelector(".story-designers-flow");
const designerSections = designerFlow?.querySelectorAll(".story-designers-stage > .story-designers");

if (designerFlow && designerSections?.length) {
  let designerFrame = null;

  const updateDesignerCards = () => {
    designerFrame = null;
    const flowStart = designerFlow.getBoundingClientRect().top + window.scrollY;
    const flowDistance = Math.max(designerFlow.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max((window.scrollY - flowStart) / flowDistance, 0), 1);
    const firstTransition = Math.min(Math.max((progress - 0.2) / 0.2, 0), 1);
    const secondTransition = Math.min(Math.max((progress - 0.6) / 0.2, 0), 1);
    const opacities = [
      1 - firstTransition,
      firstTransition * (1 - secondTransition),
      secondTransition,
    ];

    designerSections.forEach((section, index) => {
      const opacity = opacities[index] || 0;

      section.style.opacity = opacity.toFixed(3);
      section.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
    });
  };

  const requestDesignerUpdate = () => {
    if (designerFrame !== null) return;
    designerFrame = window.requestAnimationFrame(updateDesignerCards);
  };

  updateDesignerCards();
  window.addEventListener("scroll", requestDesignerUpdate, { passive: true });
  window.addEventListener("resize", requestDesignerUpdate);
}

if (philosophySection && philosophyTrack && philosophyBlocks.length) {
  philosophySection.classList.add("is-scroll-reveal-ready");

  let philosophyFrame = null;

  const updatePhilosophyLines = () => {
    philosophyFrame = null;

    const sectionStart = philosophyTrack.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = Math.max(philosophyTrack.offsetHeight - window.innerHeight, 1);
    const progress = Math.max(
      (window.scrollY - sectionStart) / scrollDistance,
      0
    );
    const transitionProgress = Math.min(progress / 0.25, 1);
    philosophySection.style.setProperty(
      "--philosophy-opacity",
      transitionProgress.toFixed(3)
    );
    heroScene?.style.setProperty("--hero-fade-opacity", transitionProgress.toFixed(3));
    const visibleBlockCount = progress < 0.3
      ? 0
      : progress < 0.55
        ? 1
        : progress < 0.8
          ? 2
          : philosophyBlocks.length;

    philosophyBlocks.forEach((block, index) => {
      block.classList.toggle("is-visible", index < visibleBlockCount);
    });

    const thirdPageVisible = thirdPage
      ? thirdPage.getBoundingClientRect().top <= 0 && thirdPage.getBoundingClientRect().bottom >= window.innerHeight
      : false;
    document.body.classList.toggle("is-third-page-visible", thirdPageVisible);
    document.body.classList.toggle("is-philosophy-dark", progress >= 0.25 && !thirdPageVisible);
  };

  const requestPhilosophyUpdate = () => {
    if (philosophyFrame !== null) return;
    philosophyFrame = window.requestAnimationFrame(updatePhilosophyLines);
  };

  updatePhilosophyLines();
  window.addEventListener("scroll", requestPhilosophyUpdate, { passive: true });
  window.addEventListener("resize", requestPhilosophyUpdate);
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
