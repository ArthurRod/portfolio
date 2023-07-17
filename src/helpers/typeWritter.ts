export function typeWritter(element: HTMLElement): Promise<void> {
  const textArray = element.innerHTML.split("");
  element.style.opacity = "1";
  element.innerHTML = "";

  return new Promise((resolve) => {
    textArray.forEach((letter: string, i: number) => {
      setTimeout(() => {
        element.innerHTML += letter;
        if (i === textArray.length - 1) {
          resolve();
        }
      }, 100 * i);
    });
  });
}
