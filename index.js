const tabs = document.querySelector(".tabs");
const content = document.querySelectorAll(".tab");
const tabbs = document.querySelectorAll(".tabss");

tabs.addEventListener("click", function (e) {
  if (e.target.classList.contains("tabss")) {
    tabbs.forEach((tab) => {
      tab.classList.remove("active");
      e.target.classList.add("active");
    });
    const h = e.target.dataset.tab;
    content.forEach((c) => {
      c.classList.add("hidden");
    });
    document.querySelector(`.tab-${h}`).classList.toggle("hidden");
  }
});

const questions = document.querySelectorAll(".question-container");
const answer = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// textin

const menu = document.getElementById("menu");
const munu_ul = document.querySelector(".nav-link");

menu.addEventListener("click", function () {
  munu_ul.classList.toggle("menu-show");
});
