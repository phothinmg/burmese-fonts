(() => {
  var htmlElement = document.querySelector("html");
  var btn = document.getElementById("theme");
  var darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Check if the user's preferred color scheme is dark
  if (darkModeQuery.matches) {
    setDarkMode();
  } else {
    setLightMode();
  }

  // Toggle theme when button is clicked
  btn.addEventListener("click", toggleTheme);

  function setDarkMode() {
    htmlElement.setAttribute("data-theme", "dark");
    btn.innerHTML = `<i class="ti ti-sun"></i>`;
  }

  function setLightMode() {
    htmlElement.setAttribute("data-theme", "light");
    btn.innerHTML = `<i class="ti ti-moon"></i>`;
  }

  function toggleTheme() {
    var currentTheme = htmlElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  }
  //----------------------------------------------------------
  var tname = document.getElementById("tvalue");
  var content = document.getElementById("input");
  var bttn = document.getElementById("run");
  var display = document.getElementById("display");
  bttn.addEventListener("click", () => {
    display.setAttribute("style", `font-family: ${tname.value}`);
    display.innerHTML = content.value;
  });
})();
