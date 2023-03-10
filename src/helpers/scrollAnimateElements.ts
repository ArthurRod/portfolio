export function scrollAnimateElements() {
  const targets = document.querySelectorAll(
    "[data-animate]"
  ) as NodeListOf<HTMLElement>;
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;

  if (targets && targets.length > 0) {
    for (const target of targets) {
      if (windowTop > target.offsetTop) {
        target.classList.add("animate");
      } else {
        target.classList.remove("animate");
      }
    }
  }
}

window.addEventListener("scroll", () => {
  scrollAnimateElements();
});
