const toggleThemeButton = document.getElementById("toggle-theme");

toggleThemeButton.addEventListener("click", () => {
  const currTheme = document.body.dataset.theme;

  let newTheme;
  if (currTheme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }
  document.body.dataset.theme = newTheme;
});

const fontBtn = document.querySelector("#change-font");

fontBtn.addEventListener("click", () => {
  const root = document.querySelector(":root");
  root.style.setProperty("--size", "22px");
});

const makeItRain = () => {
  const card = document.getElementsByClassName("card")[0];
  card.firstElementChild.innerText = Array.from({ length: 100 })
    .fill("🌧️")
    .join(" ");
};
