export function toggleDarkMode() {
  const body = document.body;
  const darkModeState = localStorage.getItem("isDarkMode");

  if (darkModeState === "true") {
    body.classList.remove("dark-mode");
    localStorage.setItem("isDarkMode", "false");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("isDarkMode", "true");
  }
}
