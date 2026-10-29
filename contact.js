const contactForm = document.querySelector(".contact-form");
const packageTypeInputs = document.querySelectorAll('input[name="제품형태[]"]');
const discoveryInputs = document.querySelectorAll('input[name="유입경로[]"]');
const guideItems = document.querySelectorAll(".contact-guide div");
const guideLinks = document.querySelectorAll(".contact-guide a");
const formSections = document.querySelectorAll(".contact-form .form-section");
const phoneInput = document.querySelector("#phone");
const fixedFormTitle = document.querySelector(".contact-form-title");
const fixedFormTitleNumber = document.querySelector(".contact-form-title__number");
const fixedFormTitleHeading = document.querySelector(".contact-form-title h2");
const fixedFormTitleDescription = document.querySelector(".contact-form-title p");
const contactModal = document.querySelector(".contact-modal");
const contactModalClose = document.querySelector(".contact-modal__close");
const addressInput = document.querySelector("#delivery-area");
const addressDetailInput = document.querySelector("#delivery-detail");
const addressSearchButton = document.querySelector(".address-search-button");
const submitButton = contactForm?.querySelector(".submit-button");
let activeTitleStep = -1;

window.addEventListener("scroll", () => {
  document.querySelector(".contact-page")?.classList.toggle("is-scrolled", window.scrollY > 0);
}, { passive: true });
document.querySelector(".contact-page")?.classList.toggle("is-scrolled", window.scrollY > 0);

const updateActiveGuide = () => {
  if (!guideItems.length || !formSections.length) return;

  const triggerLine = window.innerHeight * 0.55;
  let activeStep = 0;

  formSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= triggerLine) {
      activeStep = Number(section.dataset.step);
    }
  });

  guideItems.forEach((item, index) => {
    item.classList.toggle("is-active", index === activeStep);
  });

  formSections.forEach((section, index) => {
    section.classList.toggle("is-active", index === activeStep);
  });

  const activeSection = formSections[activeStep];
  if (fixedFormTitle && activeSection && activeTitleStep !== activeStep) {
    activeTitleStep = activeStep;
    fixedFormTitle.classList.add("is-changing");

    window.setTimeout(() => {
      fixedFormTitleNumber.textContent = String(activeStep + 1).padStart(2, "0");
      fixedFormTitleHeading.textContent = activeSection.dataset.title;
      fixedFormTitleDescription.innerHTML = activeSection.dataset.description;
      requestAnimationFrame(() => fixedFormTitle.classList.remove("is-changing"));
    }, 180);
  }
};

updateActiveGuide();
window.addEventListener("scroll", updateActiveGuide, { passive: true });
window.addEventListener("resize", updateActiveGuide);

addressSearchButton?.addEventListener("click", () => {
  if (!window.daum?.Postcode) {
    window.alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
    return;
  }

  new window.daum.Postcode({
    oncomplete: (data) => {
      addressInput.value = data.roadAddress || data.jibunAddress;
      addressInput.dispatchEvent(new Event("input", { bubbles: true }));
      addressDetailInput?.focus();
    },
  }).open();
});

guideLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.querySelector(link.hash)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.startsWith("02")) {
    if (digits.length <= 9) return digits.replace(/(02)(\d{0,3})(\d{0,4})/, "$1-$2-$3").replace(/-$/, "");
    return digits.replace(/(02)(\d{0,4})(\d{0,4})/, "$1-$2-$3").replace(/-$/, "");
  }

  if (digits.length <= 10) {
    return digits.replace(/(\d{3})(\d{0,3})(\d{0,4})/, "$1-$2-$3").replace(/-$/, "");
  }

  return digits.replace(/(\d{3})(\d{0,4})(\d{0,4})/, "$1-$2-$3").replace(/-$/, "");
};

const validatePhone = () => {
  if (!phoneInput) return true;

  const validPattern = /^(010-\d{4}-\d{4}|02-\d{3,4}-\d{4}|0(?:31|32|33|41|42|43|51|52|53|54|55|61|62|63|64|70)-\d{3,4}-\d{4})$/;
  const isValid = validPattern.test(phoneInput.value);

  phoneInput.setCustomValidity(isValid ? "" : "올바른 번호를 입력해주세요.");
  return isValid;
};

phoneInput?.addEventListener("input", () => {
  phoneInput.value = formatPhoneNumber(phoneInput.value);
  validatePhone();
});

const validatePackageType = () => {
  const isSelected = [...packageTypeInputs].some((input) => input.checked);
  const message = isSelected ? "" : "필수 항목을 입력하세요.";

  packageTypeInputs[0]?.setCustomValidity(message);
  return isSelected;
};

const validateDiscovery = () => {
  const isSelected = [...discoveryInputs].some((input) => input.checked);
  discoveryInputs[0]?.setCustomValidity(isSelected ? "" : "필수 항목을 입력하세요.");
  return isSelected;
};

packageTypeInputs.forEach((input) => {
  input.addEventListener("change", validatePackageType);
});

discoveryInputs.forEach((input) => {
  input.addEventListener("change", validateDiscovery);
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstInvalid = [...contactForm.querySelectorAll("[required]")].find((input) => !input.validity.valid);

  if (firstInvalid) {
    if (firstInvalid === phoneInput) {
      validatePhone();
    } else {
      firstInvalid.setCustomValidity("필수 항목을 입력하세요.");
    }
    firstInvalid.reportValidity();
    firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (!validatePhone()) {
    phoneInput?.reportValidity();
    return;
  }

  if (!validatePackageType()) {
    packageTypeInputs[0]?.reportValidity();
    packageTypeInputs[0]?.closest(".option-field")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    return;
  }

  if (!validateDiscovery()) {
    discoveryInputs[0]?.reportValidity();
    discoveryInputs[0]?.closest(".option-field")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    return;
  }

  if (!submitButton) return;

  submitButton.disabled = true;

  // 일반 전송: Web3Forms가 처리한 뒤 redirect 주소(contact.html?sent=1)로 돌아옵니다.
  contactForm.submit();
});

contactForm?.querySelectorAll("[required]").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim()) input.setCustomValidity("");
  });
});

contactModalClose?.addEventListener("click", () => {
  contactModal.hidden = true;
  window.location.href = "contact.html";
});

// 전송 완료 후 돌아왔을 때(?sent=1) 접수 완료 안내창을 표시합니다.
if (contactModal && new URLSearchParams(window.location.search).get("sent") === "1") {
  contactModal.hidden = false;
}

// 뒤로 가기로 돌아왔을 때 전송 버튼이 비활성화된 채 남지 않도록 합니다.
window.addEventListener("pageshow", () => {
  if (submitButton) submitButton.disabled = false;
});
