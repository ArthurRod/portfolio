let lastScrollTop = 0;

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

export function scrollPage(path: string) {
  const element = document.getElementById(path);
  const screenWidth = window.screen.width;

  if (element) {
    if (screenWidth > 768) {
      window.scrollTo(0, element.offsetTop);
    } else {
      window.scrollTo(0, element.offsetTop);
    }
  }
}

export function headerShowMobile() {
  const screenWidth = window.screen.width;

  if (screenWidth >= 1025) return;

  const element = document.getElementById("aside-navigator-menu");

  if (element) {
    var actualScrollTop = window.scrollY;

    if (actualScrollTop > lastScrollTop) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }

    lastScrollTop = actualScrollTop;
  }
}

window.addEventListener("scroll", () => {
  scrollAnimateElements();
  headerShowMobile();
});
