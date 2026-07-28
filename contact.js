const contactParams = new URLSearchParams(window.location.search);
const successMessage = document.querySelector(".form-success");
const contactForm = document.querySelector(".contact-form");
const packageTypeInputs = document.querySelectorAll('input[name="제품형태[]"]');
const fileInputs = document.querySelectorAll(".native-file-input");

if (contactParams.get("sent") === "1" && successMessage) {
  successMessage.classList.add("is-visible");
}

const validatePackageType = () => {
  const isSelected = [...packageTypeInputs].some((input) => input.checked);
  const message = isSelected ? "" : "제품 형태를 한 가지 이상 선택해 주세요.";

  packageTypeInputs[0]?.setCustomValidity(message);
  return isSelected;
};

packageTypeInputs.forEach((input) => {
  input.addEventListener("change", validatePackageType);
});

fileInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const uploadLabel = document.querySelector(`label[for="${input.id}"] small`);
    const file = input.files?.[0];

    if (uploadLabel && file) {
      uploadLabel.textContent = `${file.name} · ${(file.size / 1024 / 1024).toFixed(1)}MB`;
    }
  });
});

contactForm?.addEventListener("submit", (event) => {
  if (!validatePackageType()) {
    event.preventDefault();
    packageTypeInputs[0]?.reportValidity();
    packageTypeInputs[0]?.closest(".option-field")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    return;
  }

  const totalFileSize = [...fileInputs].reduce(
    (total, input) => total + (input.files?.[0]?.size || 0),
    0
  );

  if (totalFileSize > 10 * 1024 * 1024) {
    event.preventDefault();
    window.alert("첨부파일 전체 용량은 10MB 이하로 선택해 주세요.");
  }
});
