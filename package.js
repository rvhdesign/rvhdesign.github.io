const boxData = {
  carton: {
    index: "01 / 05",
    category: "FOLDING CARTON",
    title: "단상자",
    description:
      "한 장의 인쇄지를 접고 조립하는 가장 기본적인 패키지입니다.<br>가볍고 효율적이며 다양한 제품군에 유연하게 적용됩니다.",
  },
  sleeve: {
    index: "02 / 05",
    category: "SLEEVE BOX",
    title: "슬리브 박스",
    description:
      "속상자 위로 슬리브를 밀어 넣는 구조입니다.<br>단순한 동작만으로 제품을 드러내는 과정에 리듬과 기대감을 더합니다.",
  },
  ybox: {
    index: "03 / 05",
    category: "RIGID / Y-TYPE",
    title: "싸바리 · Y형 박스",
    description:
      "뚜껑과 하부 본체가 완전히 분리되는 상하형 싸바리 구조입니다.<br>견고하고 보존성이 좋아 선물 세트와 프리미엄 제품에 적합합니다.",
  },
  gbox: {
    index: "04 / 05",
    category: "BOOK / G-TYPE",
    title: "표지바리 · G형 박스",
    description:
      "뒤쪽 경첩으로 연결된 뚜껑을 열고 닫는 여닫이형 싸바리 구조입니다.<br>반복 사용이 편리하며 고급스러운 개봉 경험을 만듭니다.",
  },
  custom: {
    index: "05 / 05",
    category: "CUSTOM STRUCTURE",
    title: "커스텀 박스",
    description:
      "제품과 브랜드 경험에 맞춰 구조부터 새롭게 설계합니다.<br>규격화된 박스로 해결하기 어려운 특별한 형태를 구현합니다.",
  },
};

const boxButtons = document.querySelectorAll(".box-type-button");
const boxVisuals = document.querySelectorAll(".box-visual-group");
const stage = document.querySelector(".box-stage");
const stageTitle = document.querySelector("#box-stage-title");
const stageDescription = document.querySelector("#box-stage-description");
const stageInquiry = document.querySelector("#box-stage-inquiry");
const processSections = document.querySelectorAll(".package-process");
const processStepLinks = document.querySelectorAll(".package-process__steps a");
let hoveredProcessLink = null;

const updateProcessStepState = (activeStep) => {
  processStepLinks.forEach((link) => {
    const isActive = link === hoveredProcessLink || (!hoveredProcessLink && link.querySelector("strong")?.textContent.toLowerCase() === activeStep);
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "step");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (processSections.length && processStepLinks.length) {
  let processNavFrame = 0;

  const updateProcessNavigation = () => {
    processNavFrame = 0;
    const navTop = processStepLinks[0].closest(".package-process__steps").getBoundingClientRect().top;
    const activeSection = [...processSections].find((section) => {
      const bounds = section.getBoundingClientRect();
      const sectionTrigger = section.classList.contains("package-process--planning")
        ? section.querySelector("h2").getBoundingClientRect().bottom
        : bounds.top;
      return sectionTrigger <= navTop && bounds.bottom > navTop;
    });
    const activeStep = activeSection?.dataset.processStep;

    document.body.classList.toggle("is-process-visible", Boolean(activeSection));
    document.body.classList.toggle("is-sales-visible", activeStep === "sales");
    updateProcessStepState(activeStep);
  };

  const requestProcessNavigationUpdate = () => {
    if (!processNavFrame) {
      processNavFrame = window.requestAnimationFrame(updateProcessNavigation);
    }
  };

  window.addEventListener("scroll", requestProcessNavigationUpdate, { passive: true });
  window.addEventListener("resize", requestProcessNavigationUpdate);
  updateProcessNavigation();

  processStepLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      hoveredProcessLink = link;
      updateProcessStepState();
    });
    link.addEventListener("mouseleave", () => {
      hoveredProcessLink = null;
      updateProcessNavigation();
    });
  });
}

const selectBox = (boxKey) => {
  const selected = boxData[boxKey];
  if (!selected || !stage) return;

  stage.classList.add("is-changing");

  window.setTimeout(() => {
    boxButtons.forEach((button) => {
      const isActive = button.dataset.box === boxKey;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    boxVisuals.forEach((visual) => {
      visual.classList.toggle("is-active", visual.dataset.boxVisual === boxKey);
    });

    stageTitle.textContent = selected.title;
    stageDescription.innerHTML = selected.description;
    stageInquiry.href = `contact.html?box=${boxKey}`;
    stage.classList.remove("is-changing");
  }, 180);
};

boxButtons.forEach((button) => {
  button.addEventListener("click", () => selectBox(button.dataset.box));
});

