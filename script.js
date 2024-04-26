document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0, // Change this threshold as needed
  });

  boxes.forEach((box) => {
    observer.observe(box);
  });
});

const links = document.querySelectorAll("nav li");
const check = document.getElementById("check");
const menu = document.getElementById("menu");
const closeIcone = document.getElementById("close");

check.addEventListener("change", function () {
  if (this.checked) {
    console.log("La checkbox est cochée.");
    menu.style.display = "none";
    closeIcone.style.display = "block";
  } else {
    console.log("La checkbox est décochée.");
    menu.style.display = "block";
    closeIcone.style.display = "none";
  }
});

check.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Au chargement de la page
window.onload = function () {
  // Détecter le défilement de la page
  window.onscroll = function () {
    scrollFunction();
  };
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Afficher ou masquer le bouton en fonction du défilement de la page
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Fonction pour remonter en haut de la page lorsqu'on clique sur le bouton
document.getElementById("scrollToTopBtn").onclick = function () {
  document.body.scrollTop = 0; // Pour les navigateurs web
  document.documentElement.scrollTop = 0; // Pour IE, Firefox, Chrome, etc.
};
