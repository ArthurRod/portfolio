export function activateDarkMode() {
  const body = document.body;
  const bodyContainsDarkModeClass = body.classList.contains("dark-mode");
  const darkModeState = localStorage.getItem("isDarkMode");

  if (
    bodyContainsDarkModeClass ||
    (darkModeState && darkModeState === "true")
  ) {
    body.classList.remove("dark-mode");
    localStorage.setItem("isDarkMode", "false");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("isDarkMode", "true");
  }
}
