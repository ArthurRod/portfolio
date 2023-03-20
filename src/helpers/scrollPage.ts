export function scrollPage(path: string) {
  const element = document.getElementById(path);

  if (element) {
    window.scrollTo(0, element.offsetTop);
  }
}
