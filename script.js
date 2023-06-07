const dayNight = document.querySelector(".day-night");
const bgColor = dayNight.querySelector("i");

dayNight.addEventListener("click", () => {
  bgColor.classList.toggle("fa-sun");
  bgColor.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    bgColor.style.backgroundColor = "white";
  } else {
    bgColor.style.backgroundColor = "red";
  }
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    bgColor.classList.add("fa-sun");
    bgColor.style.backgroundColor = "white";
  } else {
    bgColor.classList.add("fa-moon");
    bgColor.style.backgroundColor = "red";
  }
});

/* typing animation */
var typed = new Typed(".typing",{
    strings:['','Web Designer','Web Developer','Graphic Designer'],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});
var typed = new Typed(".typing1",{
    strings:['','Web Designer','Web Developer','Graphic Designer'],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});
