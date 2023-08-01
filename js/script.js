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
      Swal.fire({
        title: 'Success!',
        text: 'Successfully sent email',
        icon: 'success',
        confirmButtonText: 'Done'
      })
    })
    .catch(err => 
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send email.',
        icon: 'error',
        confirmButtonText: 'Ok'
      }).then((err) => {
        if (!err.isConfirmed) {
          location.reload()
        }
      })
      );

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
      Swal.fire({
        title: 'Success!',
        text: 'Successfully sent subscription request.',
        icon: 'success',
        confirmButtonText: 'Done',
        customClass: {
          confirmButton: 'bg-brightRed'
        }
      }).then((res) => {
        if (res.isConfirmed) {
          location.reload()
        }
      })
    })
    .catch(err => Swal.fire({
      title: 'Error!',
      text: 'Failed to send subscription request.',
      icon: 'error',
      confirmButtonText: 'Ok'
    }).then((err) => {
      if (!err.isConfirmed) {
        location.reload()
      }
    })
    );

}

function changeTab(evt, article) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].className = tablinks[i].className.replace(" border-brightRed", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(article).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.className += " border-brightRed";
} 