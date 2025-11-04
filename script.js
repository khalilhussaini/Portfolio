const backtop = document.querySelector(".back-to-top")
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backtop.style.display = "block";
  } else {
    backtop.style.display = "none"
  }

});