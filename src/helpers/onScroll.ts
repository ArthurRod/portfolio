let lastScrollTop = 0;

export function scrollAnimateElements() {
  const targets = document.querySelectorAll(
    "[data-animate]"
  ) as NodeListOf<HTMLElement>;
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;

  if (targets.length > 0) {
    targets.forEach((target) => {
      if (windowTop > target.offsetTop) {
        target.classList.add("animate");
      } else {
        target.classList.remove("animate");
      }
    });
  }
}

export function scrollPage(path: string) {
  const element = document.getElementById(path);

  if (element) {
    window.scrollTo(0, element.offsetTop);
  }
}

export function headerShowMobile() {
  const screenWidth = window.screen.width;

  if (screenWidth >= 1025) return;

  const element = document.getElementById("aside-navigator-menu");

  if (element) {
    const actualScrollTop = window.scrollY;

    if (actualScrollTop > lastScrollTop) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }

    lastScrollTop = actualScrollTop;
  }
}

function handleScroll() {
  scrollAnimateElements();
  headerShowMobile();
}

window.addEventListener("scroll", handleScroll);
