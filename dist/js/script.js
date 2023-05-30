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
  } else if (!nav_bg.classList.contains("bg-transparent")) {
    if (window.scrollY === 0) {
      nav_bg.classList.add("bg-transparent")
      nav_bg.classList.remove("opacity-50")
    } else {
      nav_bg.classList.remove("bg-transparent");
      nav_bg.classList.add("opacity-50")
    }
  }
});

function sendContactMail() {
  var params = {
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_rtwnsn9";
  const templateID = "template_slzo1on";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      location.reload()
    })
    .catch(err => console.log(err));

}

function sendSubscribeMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
  };

  const serviceID = "service_rtwnsn9";
  const templateID = "template_kr4qebc";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobile").value = "";
      location.reload()
    })
    .catch(err => console.log(err));

}