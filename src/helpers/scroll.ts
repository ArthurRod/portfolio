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

export function scrollHeaderShow() {
  const screenWidth = window.screen.width;

  if (screenWidth >= 1100) return;

  const element = document.getElementById("aside-navigator-menu");

  if (element) {
    const actualScrollTop = window.scrollY;

    if (actualScrollTop > 100) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
}

export function scrollVdeoPlay() {
  const targets = document.querySelectorAll(
    "video"
  ) as NodeListOf<HTMLVideoElement>;
  let animationFrameId: number | null = null;

  if (targets.length > 0) {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      targets.forEach((target) => {
        if (isElementInViewport(target)) {
          if (target.paused) {
            target.play();
          }
        } else {
          if (!target.paused) {
            target.pause();
          }
        }
      });
    });
  }
}

function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function scrollPage(path: string) {
  const element = document.getElementById(path);

  if (element) {
    window.scrollTo(0, element.offsetTop);
  }
}

function handleScroll() {
  scrollAnimateElements();
  scrollHeaderShow();
  scrollVdeoPlay();
}

window.addEventListener("scroll", handleScroll);
