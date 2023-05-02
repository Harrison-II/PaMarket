const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const nav_bg = document.getElementById("navbar");

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

window.addEventListener("scroll", () => {

  if (nav_bg.classList.contains("bg-transparent")) {
    if (window.scrollY === 0) {
      nav_bg.classList.add("bg-transparent")
      nav_bg.classList.remove("opacity-50")
    } else {
      nav_bg.classList.remove("bg-transparent");
      nav_bg.classList.add("opacity-50")
    }
  } else if(!nav_bg.classList.contains("bg-transparent")) {
    if (window.scrollY === 0) {
      nav_bg.classList.add("bg-transparent")
      nav_bg.classList.remove("opacity-50")
    } else {
      nav_bg.classList.remove("bg-transparent");
      nav_bg.classList.add("opacity-50")
    }
  }
});
