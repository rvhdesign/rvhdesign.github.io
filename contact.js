const contactParams = new URLSearchParams(window.location.search);
const successMessage = document.querySelector(".form-success");

if (contactParams.get("sent") === "1" && successMessage) {
  successMessage.classList.add("is-visible");
}
