"use strict";

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".navToggle");
const navLists = document.querySelector(".navLink");

console.log(navBtn);

navBtn.addEventListener("click", function () {
  nav.classList.toggle("sticky");
});
// nav stick remover
const navLink = document.querySelectorAll(".navLink");
navLink.forEach((btn) => {
  btn.addEventListener("click", function () {
    nav.classList.remove("sticky");
  });
});
// nav-intersection
const navChange = document.querySelector(".hero");

const navObserver = new IntersectionObserver(
  function (entry) {
    const [enter] = entry;
    if (!enter.isIntersecting) {
      document.body.classList.add("NavStick");
    } else {
      document.body.classList.remove("NavStick");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
navObserver.observe(navChange);

const diff = document.querySelector(".namy");
const text = document.querySelector(".email");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const imagefile = document.querySelector("file");
const submit = document.querySelector(".footer-btn");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    !diff.value ||
    !text.value ||
    !subject.value ||
    !imagefile.value ||
    !message.value
  ) {
    return alert("anter all your input field");
  }
  const data = {
    fullName: diff.value,
    email: text.value,
    subject: subject.value,
    imagefile: file.value,
    message: message.value,
  };
});

// portfolio

const btn = document.querySelectorAll(".tabClick");
const content = document.querySelectorAll(".tabContent");

btn.forEach((clicker) => {
  clicker.addEventListener("click", function () {
    // Adds and remove active for title
    btn.forEach((clicked) => {
      clicked.classList.remove("tactive");
      clicker.classList.add("tactive");

      //   Adds and remove active for content
      content.forEach((display) => display.classList.remove("tcActive"));
      const contentToDisplay = clicker.getAttribute("data-target");
      const displayed = document
        .getElementById(contentToDisplay)
        .classList.add("tcActive");
    });
  });
});

// portfolio
