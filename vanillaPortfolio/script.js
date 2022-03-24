ScrollReveal().reveal(".navbar", { duration: 2000, origin: "top", distance: "100px"});
ScrollReveal().reveal(".text", { duration: 2000, origin: "right", distance: "300px"});
ScrollReveal().reveal(".pic", { duration: 2000, origin: "left", distance: "300px"});
ScrollReveal().reveal(".portfolioTitle", { duration: 2000, origin: "bottom", distance: "5px"});
ScrollReveal().reveal(".card1", { duration: 2000, origin: "left", distance: "800px"});
ScrollReveal().reveal(".card2", { duration: 2000, origin: "right", distance: "800px"});
ScrollReveal().reveal(".contact", { duration: 2000, origin: "bottom", distance: "100px"});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
