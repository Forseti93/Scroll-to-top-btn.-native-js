let toTopBtn = document.querySelector("button"),
  scrolledDiv = document.querySelector(".scroll-box");

toTopBtn.addEventListener("click", () => {
  scrolledDiv.scrollTop = 0;
});
